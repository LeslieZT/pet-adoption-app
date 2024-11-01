import { z } from "zod";

export const SearchSchema = z.object({
  location: z.string(),
  petType: z.string(),
  gender: z.string(),
  age: z.string(),
});

export type SearchFormData = z.infer<typeof SearchSchema>;
