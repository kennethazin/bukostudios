"use server";
import { z } from "zod";
import { formSchema } from "./schemas";
import { Resend } from "resend";
import { EmailTemplate, EmailTemplateFull} from "@/components/email-template";
import { env } from "@/app/env";

const resend = new Resend(env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  const { data, error } = await resend.emails.send({
    from: `Witespace Studios <${env.RESEND_FROM_EMAIL}>`,
    to: [emailFormData.email],
    subject: "Thanks for filling out the inquiry form",
    react: EmailTemplate({ firstName: emailFormData.firstName }),
  });

  if (error) {
    throw error;
  }

  const { data: responseData, error: sendError} = await resend.emails.send({
    from: `Kenneth <${env.RESEND_FROM_EMAIL}>`,
    to: ["kenneth@witespacestudios.com"], 
    subject: "New Lead Form Submission",
    react: EmailTemplateFull({ 
      firstName: emailFormData.firstName,
      email: emailFormData.email,
      businessName: emailFormData.businessName,
      projectType: emailFormData.projectType,
      strugglesOrNeeds: emailFormData.strugglesOrNeeds,
      goals: emailFormData.goals,
      estimatedBudget: emailFormData.estimatedBudget,
      visualInspiration: emailFormData.visualInspiration,
      startDate: emailFormData.startDate,
      additionalInformation: emailFormData.additionalInformation,
     }),
  });

  if (error) {
    throw sendError;
  }

};
