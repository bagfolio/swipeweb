import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSubscriberSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist API endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      // Validate the request body
      const data = insertWaitlistSubscriberSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getWaitlistSubscriberByEmail(data.email);
      
      if (existingSubscriber) {
        return res.status(409).json({ 
          message: "You're already on our waitlist! We'll be in touch soon." 
        });
      }
      
      // Store the subscriber
      const subscriber = await storage.createWaitlistSubscriber(data);
      
      return res.status(201).json({
        message: "Successfully joined the waitlist!",
        subscriber,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      
      return res.status(500).json({ 
        message: "Something went wrong. Please try again later." 
      });
    }
  });

  // Add a simple privacy policy route
  app.get("/api/privacy", (_req, res) => {
    res.json({ 
      message: "Privacy policy will be available soon." 
    });
  });
  
  // Get all waitlist subscribers (admin endpoint - could add authentication later)
  app.get("/api/waitlist", async (_req, res) => {
    try {
      const subscribers = await storage.getAllWaitlistSubscribers();
      return res.status(200).json(subscribers);
    } catch (error) {
      return res.status(500).json({ 
        message: "Something went wrong. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
