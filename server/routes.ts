import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/products", async (_req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get("/api/products/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    const product = await storage.getProduct(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  });

  app.post("/api/contact", async (req, res) => {
    const parsed = insertContactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid contact form data", details: parsed.error.errors });
    }
    const submission = await storage.createContactSubmission(parsed.data);
    res.status(201).json(submission);
  });

  return httpServer;
}
