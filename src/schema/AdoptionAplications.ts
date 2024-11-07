import { z } from "zod";

export const AdoptionApplicationSchema = z.object({
  housingType: z.string(),
  isPlaceOwned: z.boolean(),
  hasPermission: z.boolean(),
  hasOutdoorSpace: z.boolean(),
  hasPastExperience: z.boolean(),
  canCoverCosts: z.boolean(),
  canTakePetWalk: z.boolean(),
  canTakeTimeOff: z.boolean(),
  agreesToVisit: z.boolean(),
  agreesToFollowUp: z.boolean(),
  adoptionReason: z.string().min(1),
  situationChange: z.string().min(1),
});

export type AdoptionApplicationFormData = z.infer<typeof AdoptionApplicationSchema>;
