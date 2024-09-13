import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;

}

interface EmailTemplateFullProps {
  firstName: string;
  email: string;
  businessName: string;
  projectType: string;
  strugglesOrNeeds: string;
  goals: string;
  estimatedBudget: string;
  visualInspiration?: string;
  startDate: Date;
  additionalInformation?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Hi, {firstName}!</h1>
    <p>Thanks for taking the time to fill our inquiry form. We will review your response and reach out to you to set up a discovery call if we&apos;re a good fit for each other </p>
  </div>
);

export const EmailTemplateFull: React.FC<Readonly<EmailTemplateFullProps>> = ({
  firstName,
  email,
  businessName,
  projectType,
  strugglesOrNeeds,
  goals,
  estimatedBudget,
  visualInspiration,
  startDate,
  additionalInformation,
}) => (
  
  <div>
    <h1>Form Submission Details</h1>
    <p><strong>First Name:</strong> {firstName}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Business Name:</strong> {businessName}</p>
    <p><strong>Project Type:</strong> {projectType}</p>
    <p><strong>Struggles or Needs:</strong> {strugglesOrNeeds}</p>
    <p><strong>Goals:</strong> {goals}</p>
    <p><strong>Estimated Budget:</strong> {estimatedBudget}</p>
    <p><strong>Visual Inspiration:</strong> {visualInspiration}</p>
    <p><strong>Start Date:</strong> {startDate.toString()}</p>
    <p><strong>Additional Information:</strong> {additionalInformation}</p>
  </div>
);