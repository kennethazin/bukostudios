"use server";
import { z } from "zod";
import { formSchema } from "./schemas";
import { Resend } from "resend";
import { EmailTemplate, EmailTemplateFull} from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  const { data, error } = await resend.emails.send({
    from: `Witespace Studios <${process.env.RESEND_FROM_EMAIL}>`,
    to: [emailFormData.email],
    subject: "Thanks for filling out the inquiry form",
    react: EmailTemplate({ firstName: emailFormData.firstName }),
  });

  const { data: data2, error: error2 } = await resend.emails.send({
    from: `Witespace Studios <${process.env.RESEND_FROM_EMAIL}>`,
    to: ["kenneth@witespacestudios.com"], 
    subject: "New Lead Form Submission",
    react: EmailTemplateFull({ formData: emailFormData }),
  });

  if (error) {
    throw error;
  }

};
