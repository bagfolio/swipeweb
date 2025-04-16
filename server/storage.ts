import { 
  users, 
  waitlistSubscribers, 
  type User, 
  type InsertUser, 
  type WaitlistSubscriber, 
  type InsertWaitlistSubscriber 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Waitlist subscriber methods
  getWaitlistSubscriber(id: number): Promise<WaitlistSubscriber | undefined>;
  getWaitlistSubscriberByEmail(email: string): Promise<WaitlistSubscriber | undefined>;
  createWaitlistSubscriber(subscriber: InsertWaitlistSubscriber): Promise<WaitlistSubscriber>;
  getAllWaitlistSubscribers(): Promise<WaitlistSubscriber[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  async getWaitlistSubscriber(id: number): Promise<WaitlistSubscriber | undefined> {
    const [subscriber] = await db
      .select()
      .from(waitlistSubscribers)
      .where(eq(waitlistSubscribers.id, id));
    return subscriber || undefined;
  }

  async getWaitlistSubscriberByEmail(email: string): Promise<WaitlistSubscriber | undefined> {
    const [subscriber] = await db
      .select()
      .from(waitlistSubscribers)
      .where(eq(waitlistSubscribers.email, email));
    return subscriber || undefined;
  }

  async createWaitlistSubscriber(subscriber: InsertWaitlistSubscriber): Promise<WaitlistSubscriber> {
    // Check if email already exists first
    const existing = await this.getWaitlistSubscriberByEmail(subscriber.email);
    if (existing) {
      return existing;
    }
    
    const [newSubscriber] = await db
      .insert(waitlistSubscribers)
      .values(subscriber)
      .returning();
    return newSubscriber;
  }

  async getAllWaitlistSubscribers(): Promise<WaitlistSubscriber[]> {
    return db.select().from(waitlistSubscribers);
  }
}

export const storage = new DatabaseStorage();
