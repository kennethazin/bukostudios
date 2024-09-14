import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate, EmailTemplateFull } from "@/components/email-template";
import { z } from "zod";
import { formSchema } from "@/lib/schemas";
import { env } from "@/app/env";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: { method: string; json: () => any; }) {
  if (req.method === 'POST') {
    try {
      const emailFormData = await req.json();
      
      // Validate the form data
      const validatedData = formSchema.parse(emailFormData);

      // Send email to the user
      const { data: userData, error: userError } = await resend.emails.send({
        from: `Witespace Studios <${env.RESEND_FROM_EMAIL}>`,
        to: [validatedData.email],
        subject: "Thanks for filling out the inquiry form",
        react: EmailTemplate({ firstName: validatedData.firstName }),
      });

      if (userError) {
        throw userError;
      }

      // Send email to Kenneth
      const { data: kennethData, error: kennethError } = await resend.emails.send({
        from: `Kenneth <${env.RESEND_FROM_EMAIL}>`,
        to: ["kenneth@witespacestudios.com"],
        subject: "New Lead Form Submission",
        react: EmailTemplateFull({ 
          firstName: validatedData.firstName,
          email: validatedData.email,
          businessName: validatedData.businessName,
          projectType: validatedData.projectType,
          strugglesOrNeeds: validatedData.strugglesOrNeeds,
          goals: validatedData.goals,
          estimatedBudget: validatedData.estimatedBudget,
          visualInspiration: validatedData.visualInspiration,
          startDate: validatedData.startDate,
          additionalInformation: validatedData.additionalInformation,
        }),
      });

      if (kennethError) {
        throw kennethError;
      }

      return NextResponse.json({ userData, kennethData });
    } catch (error) {
      return NextResponse.json({ error: (error as Error).message }, { status: 400 });
    }
  }

  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}