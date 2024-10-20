import { z } from "zod";

const stringToDate = z.string().pipe(z.coerce.date());

export const formSchema = z.object({
  firstName: z
    .string({
      required_error: "Please insert your first name.",
    })
    .min(2)
    .max(50),
  lastName: z
    .string().min(2).max(50).optional(),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  businessName: z.string().min(2).max(100),
  projectType: z.string().min(2).max(100),
  strugglesOrNeeds: z.string().min(10).max(500),
  goals: z.string().min(10).max(500), // Goals with a minimum and maximum length
  estimatedBudget: z.string().min(1).max(50), // Estimated budget as a string
  visualInspiration: z.string().max(500).optional(), // Visual inspiration as a URL
  startDate: z.coerce.date(),
  additionalInformation: z.string().optional(), // Additional information as an optional string
});
