import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Hi, {firstName}!</h1>
    <p>Thanks for taking the time to fill our inquiry form. We will review your response and reach out to you to set up a discovery call if we&apos;re a good fit for each other </p>
  </div>
);

export const EmailTemplateFull = ({ formData }: { formData: any }) => (
  <div>
    <h1>Form Submission Details</h1>
    <p><strong>First Name:</strong> {formData.firstName}</p>
    <p><strong>Last Name:</strong> {formData.lastName}</p>
    <p><strong>Email:</strong> {formData.email}</p>
    <p><strong>Business Name:</strong> {formData.businessName}</p>
    <p><strong>Project Type:</strong> {formData.projectType}</p>
    <p><strong>Struggles or Needs:</strong> {formData.strugglesOrNeeds}</p>
    <p><strong>Goals:</strong> {formData.goals}</p>
    <p><strong>Estimated Budget:</strong> {formData.estimatedBudget}</p>
    <p><strong>Visual Inspiration:</strong> {formData.visualInspiration}</p>
    <p><strong>Start Date:</strong> {formData.startDate.toString()}</p>
    <p><strong>Additional Information:</strong> {formData.additionalInformation}</p>
  </div>
);