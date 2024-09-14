"use server"
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate, EmailTemplateFull } from "@/components/email-template";
import { formSchema } from "@/lib/schemas";
import { env } from "@/app/env";

const resend = new Resend("re_UTxvBqrU_Fg8MbjfygeBaCJybNMKq9zDw");

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const emailFormData = await req.json();
      
      // Validate the form data
      const validatedData = formSchema.parse(emailFormData);

      // Send email to the user
      const { data: userData, error: userError } = await resend.emails.send({
        from: `Kenneth <kenneth@witespacestudios.com>`,
        to: [validatedData.email],
        subject: "Thanks for filling out the inquiry form",
        react: EmailTemplate({ firstName: validatedData.firstName }),
      });

      if (userError) {
        throw userError;
      }

      // Send email to Kenneth
      const { data: kennethData, error: kennethError } = await resend.emails.send({
        from: `Kenneth <kenneth@witespacestudios.com>`,
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
      return NextResponse.json({ error: (error as { message: string }).message }, { status: 500 });
    }
  }

  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}