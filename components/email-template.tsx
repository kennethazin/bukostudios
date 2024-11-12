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
  <div style={{
    fontFamily: 'Helvetica, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    color: '#0a0a0a',
  }}>
    <div style={{
      textAlign: 'center',
      marginBottom: '20px',
    }}>
      <h1 style={{
        fontSize: '24px',
        marginBottom: '10px',
      }}>Witespace Studios</h1>
      <div style={{
        height: '2px',
        backgroundColor: '#4a4a4a',
        width: '100px',
        margin: '0 auto',
      }}></div>
    </div>
    <h2 style={{
      fontSize: '20px',
      marginBottom: '20px',
    }}>Hi, {firstName}!</h2>
    <p style={{
      fontSize: '16px',
      lineHeight: '1.5',
      marginBottom: '20px',
    }}>
      Thank you for taking the time to fill out our inquiry form. We appreciate your interest in Witespace Studios and look forward to the possibility of working together.
    </p>
    <p style={{
      fontSize: '16px',
      lineHeight: '1.5',
      marginBottom: '20px',
    }}>
      Our team will carefully review your response. If we believe we&apos;re a good fit for each other, we&apos;ll reach out to you within the next 2-3 business days to set up a discovery call.
    </p>
    <p style={{
      fontSize: '16px',
      lineHeight: '1.5',
      marginBottom: '20px',
    }}>
      In the meantime, feel free to check out our portfolio and case studies on our website to get a better idea of our work and capabilities.
    </p>
    <div style={{
      backgroundColor: '#f0f0f0',
      padding: '15px',
      borderRadius: '5px',
      marginBottom: '20px',
    }}>
      <p style={{
        fontSize: '14px',
        margin: '0',
      }}>
        <strong>Next steps:</strong> Keep an eye on your inbox. If we&apos;re a good match, we&apos;ll send you an invitation for a discovery call where we can discuss your project in more detail.
      </p>
    </div>
    <p style={{
      fontSize: '16px',
      lineHeight: '1.5',
    }}>
      Best regards,<br />
      The Witespace Studios Team
    </p>
    <div style={{
      marginTop: '30px',
      textAlign: 'center',
      fontSize: '14px',
      color: '##636363',
    }}>
      <p>Witespace Studios | Crafting Digital Experiences</p>
      <p>
        <a href="https://www.witespacestudios.com" style={{ color: '#4a4a4a', textDecoration: 'none' }}>www.witespacestudios.com</a>
      </p>
    </div>
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