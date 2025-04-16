import { z } from "zod";
import { insertWaitlistSubscriberSchema } from "@shared/schema";

export const waitlistFormSchema = insertWaitlistSubscriberSchema.extend({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});
