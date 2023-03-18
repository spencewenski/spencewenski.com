import { trpc } from "@/utils/trpc";
import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { isEmpty } from "lodash";
import CustomTextField from "@/components/CustomTextField";
import SendIcon from "@mui/icons-material/Send";
import Head from "next/head";
import { useEffectOnce, useLocalStorage } from "usehooks-ts";

type ContactFormData = {
  email: string;
  salary: string;
  message: string;
};

const DEFAULT_CONTACT_INFO = {
  email: "",
  salary: "",
  message: "",
};

export default function Contact({}) {
  const sendMessageFromContactPageMutation =
    trpc.sendMessageFromContactPage.useMutation();
  const [email, setEmail] = useState<ContactFormData["email"]>("");
  const [salary, setSalary] = useState<ContactFormData["salary"]>("");
  const [message, setMessage] = useState<ContactFormData["message"]>("");
  const { pathname, push, query } = useRouter();

  // LocalStorage of contact info
  const [contactLS, setContactLS] = useLocalStorage<ContactFormData>(
    "contactInfo",
    DEFAULT_CONTACT_INFO
  );
  useEffectOnce(() => {
    if (!contactLS) {
      return;
    }
    setEmail(contactLS.email);
    setSalary(contactLS.salary);
    setMessage(contactLS.message);
  });
  useEffect(() => {
    setContactLS({
      email,
      salary,
      message,
    });
  }, [email, message, salary, setContactLS]);

  const formSuccess: boolean = useMemo(() => {
    const success = query["success"];
    if (!success || typeof success !== "string") {
      return false;
    }
    return JSON.parse(success);
  }, [query]);

  useEffect(() => {
    if (formSuccess) {
      setEmail("");
      setSalary("");
      setMessage("");
      setContactLS(DEFAULT_CONTACT_INFO);
    }
  }, [formSuccess, setContactLS]);

  const handleFormSubmitted = useCallback(
    async (e: FormEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      await sendMessageFromContactPageMutation.mutateAsync({
        email,
        salary,
        message,
      });
      await push({
        pathname,
        query: {
          success: true,
        },
      });
    },
    [email, message, pathname, push, salary, sendMessageFromContactPageMutation]
  );

  const emailError = useCallback(() => {
    return isEmpty(email);
  }, [email]);

  const salaryError = useCallback(() => {
    return isEmpty(salary);
  }, [salary]);

  const messageError = useCallback(() => {
    return isEmpty(message.trim());
  }, [message]);

  const submitErrorMessage = useMemo(() => {
    if (emailError() || salaryError() || messageError()) {
      return "Please fill out the form.";
    }
    return undefined;
  }, [emailError, salaryError, messageError]);

  return (
    <>
      <Head>
        <title>Spencewenski | Contact</title>
      </Head>
      <Typography variant={"h4"}>Contact</Typography>
      {formSuccess && (
        <>
          <Typography gutterBottom>
            Your message was sent successfully. I will get back to you as soon
            as possible.
          </Typography>
          <Link href={"/contact"} passHref={true} prefetch={false}>
            <Button variant={"contained"}>Send Another Message</Button>
          </Link>
        </>
      )}
      {!formSuccess && (
        <>
          <Typography>
            Have a question for Spencer? Reaching out regarding a career
            opportunity? Please fill out the below form and I will get back to
            you as soon as possible.
          </Typography>
          <Box
            component={"form"}
            marginTop={"1em"}
            onSubmit={handleFormSubmitted}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CustomTextField
                  label={"Email"}
                  state={{
                    value: email,
                    setValue: setEmail,
                  }}
                  type={"email"}
                  error={emailError}
                  helperText={() => "Please provide your email address."}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  label={"Salary Range"}
                  state={{
                    value: salary,
                    setValue: setSalary,
                  }}
                  error={salaryError}
                  helperText={() =>
                    "Please specify the salary range of the role."
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  label={"Message"}
                  state={{
                    value: message,
                    setValue: setMessage,
                  }}
                  error={() => isEmpty(message.trim())}
                  minRows={4}
                  helperText={() => "Please write a message."}
                />
              </Grid>
              <Grid item xs={12}>
                <Tooltip title={submitErrorMessage}>
                  {/*https://mui.com/material-ui/react-tooltip/#disabled-elements*/}
                  <span>
                    <Button
                      type={"submit"}
                      variant={"contained"}
                      disabled={
                        !!submitErrorMessage ||
                        sendMessageFromContactPageMutation.isLoading
                      }
                      endIcon={<SendIcon />}
                    >
                      Submit
                    </Button>
                  </span>
                </Tooltip>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}
