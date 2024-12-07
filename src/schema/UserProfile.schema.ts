import { z } from "zod";

export const UserProfileSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    birthdate: z.optional(z.string().min(1, "Birthdate is required")),
    phone: z.optional(z.string().min(9, "Phone number must be at least 9 characters").nullable()),
    address: z.optional(z.string().min(5, "Address must be at least 5 characters").nullable()),
    departmentId: z.optional(z.string().nullable()),
    provinceId: z.optional(z.string().nullable()),
    districtId: z.optional(z.string().nullable()),
  })
  .refine(
    (data) =>
      !(data.departmentId || data.provinceId || data.districtId) ||
      (data.departmentId && data.provinceId && data.districtId),
    {
      message: "If one of department, province, or district is filled, all three must be provided.",
      path: ["department"],
    },
  );

export type UserProfileFormData = z.infer<typeof UserProfileSchema>;
