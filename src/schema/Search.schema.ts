import { z } from "zod";

export const SearchSchema = z.object({
  location: z.optional(z.string()),
  option: z.optional(
    z.object({
      placeId: z.string(),
      departmentName: z.optional(z.string().nullable()),
      provinceName: z.optional(z.string().nullable()),
      districtName: z.optional(z.string().nullable()),
      placeLevel: z.string(),
      fullLocation: z.string(),
      shelterAddress: z.optional(z.string().nullable()),
    }),
  ),
  petType: z.optional(z.string()),
  gender: z.optional(z.string()),
  age: z.optional(z.string()),
  page: z.optional(z.number()),
  limit: z.optional(z.number()),
});

export type SearchFormData = z.infer<typeof SearchSchema>;
