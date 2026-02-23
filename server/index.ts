import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import { spawn } from "child_process";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

function startFlaskServer() {
  const isProd = process.env.NODE_ENV === "production";
  log("Starting Flask backend on port 5001...", "flask");

  const cmd = isProd ? "gunicorn" : "python";
  const args = isProd
    ? ["--bind", "0.0.0.0:5001", "--workers", "2", "server_py.app:app"]
    : ["-m", "server_py.app"];

  const flask = spawn(cmd, args, {
    env: { ...process.env, PORT: "5001", NODE_ENV: process.env.NODE_ENV || "development" },
    stdio: ["ignore", "pipe", "pipe"],
  });

  flask.stdout.on("data", (data: Buffer) => {
    const lines = data.toString().trim().split("\n");
    for (const line of lines) {
      if (line.trim()) log(line.trim(), "flask");
    }
  });

  flask.stderr.on("data", (data: Buffer) => {
    const lines = data.toString().trim().split("\n");
    for (const line of lines) {
      if (line.trim()) log(line.trim(), "flask");
    }
  });

  flask.on("close", (code: number | null) => {
    log(`Flask process exited with code ${code}`, "flask");
  });

  return flask;
}

(async () => {
  const flaskProcess = startFlaskServer();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  await registerRoutes(httpServer, app);

  app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse: Record<string, any> | undefined = undefined;

    const originalResJson = res.json;
    res.json = function (bodyJson, ...args) {
      capturedJsonResponse = bodyJson;
      return originalResJson.apply(res, [bodyJson, ...args]);
    };

    res.on("finish", () => {
      const duration = Date.now() - start;
      if (path.startsWith("/api")) {
        let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
        if (capturedJsonResponse) {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        }

        log(logLine);
      }
    });

    next();
  });

  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error("Internal Server Error:", err);

    if (res.headersSent) {
      return next(err);
    }

    return res.status(status).json({ message });
  });

  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );

  process.on("exit", () => {
    flaskProcess.kill();
  });
})();
