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
