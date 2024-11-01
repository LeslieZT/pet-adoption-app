import { z } from "zod";

export const UserProfileSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
    birthdate: z.string().min(1, "Birthdate is required"),
    homeAddress: z.string().min(5, "Address must be at least 5 characters"),
    country: z.string().min(2, "Country is required"),
    state: z.string().min(2, "State/Department is required"),
    province: z.string().min(2, "Province is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type UserProfileFormData = z.infer<typeof UserProfileSchema>;
