import { z } from "zod";

export const CustomDonationSchema = z.object({
  amount: z.preprocess(
    (v) => parseFloat(v as string),
    z.number().min(1, { message: "Amount must be greater than 0" }),
  ),
});

export type CustomDonationFormData = z.infer<typeof CustomDonationSchema>;
