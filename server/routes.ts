import type { Express } from "express";
import { type Server } from "http";
import { createProxyMiddleware } from "http-proxy-middleware";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.use(
    createProxyMiddleware({
      target: "http://0.0.0.0:5001",
      changeOrigin: true,
      pathFilter: "/api",
    })
  );

  return httpServer;
}
