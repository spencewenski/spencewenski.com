import * as sendgrid from "@sendgrid/mail";
import { appProcedure } from "@/server-trpc/trpc";
import { z } from "zod";
import { MailDataRequired } from "@sendgrid/helpers/classes/mail";

sendgrid.setApiKey(process.env.SEND_GRID_MAIL_SEND_API_KEY as string);

type ContactFormTemplateData = {
  email: string;
  salary: string;
  message: string;
};

export const sendMessageFromContactPage = appProcedure
  .input(
    z.object({
      email: z.string().email(),
      salary: z.string().trim(),
      message: z.string().trim(),
    })
  )
  .mutation(async (req) => {
    const { input } = req;

    console.info({ input });

    const dynamicTemplateData: ContactFormTemplateData = {
      email: input.email,
      salary: input.salary,
      message: input.message,
    };

    const msg: MailDataRequired = {
      to: process.env.SEND_GRID_CONTACT_FORM_EMAIL as string,
      from: process.env.SEND_GRID_CONTACT_FORM_EMAIL as string,
      templateId: process.env.SEND_GRID_CONTACT_FORM_TEMPLATE_ID as string,
      subject: "Portfolio Contact",
      personalizations: [
        {
          to: process.env.SEND_GRID_CONTACT_FORM_EMAIL as string,
          dynamicTemplateData,
        },
      ],
      trackingSettings: {
        clickTracking: {
          enable: false,
          enableText: false,
        },
        openTracking: {
          enable: false,
          substitutionTag: undefined,
        },
        subscriptionTracking: {
          enable: false,
        },
      },
    };

    await sendgrid.send(msg);
  });
