import { z } from "zod";

export const ContactSchema = z.object({
  email: z.string().email("Invalid email address"),
  message: z.string().min(8, "Message must be at least 8 characters long"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
