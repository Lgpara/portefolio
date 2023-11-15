// netlify/functions/sendEmail.js

import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message } = JSON.parse(event.body);

  // Send email using Netlify Email Integration
  await fetch(`${process.env.URL}/.netlify/functions/emails/your-email-template`, {
    method: "POST",
    headers: {
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
    },
    body: JSON.stringify({
      from: email,
      to: "louisgerber004@gmail.com", 
      subject: "New Contact Form Submission",
      parameters: {
        name,
        email,
        message,
      },
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent successfully" }),
  };
};

export { handler };
