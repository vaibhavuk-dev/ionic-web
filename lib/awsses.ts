import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({ region: process.env.AWS_REGION });

export async function sendEmail({ to, subject, body }: any) {

  console.log("Sending email", to, subject, body);
  
  const params = {
    Destination: {
      ToAddresses: [to], // Recipient
    },
    Message: {
      Body: {
        Html: {
          Data: body?.Html,
          Charset: "UTF-8",
        },
        Text: {
          Data: body?.Text,
          Charset: "UTF-8",
        },
      },
      Subject: { Data: subject },
    },
    Source: "vaibhavuk.dev@gmail.com", // Verified sender
  };

  try {
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);
    console.log("Email sent successfully", response);
    return response;
  } catch (error) {
    console.error("Error sending email", error);
    throw error;
  }
}
