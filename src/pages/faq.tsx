import { Grid, Paper, Typography } from "@mui/material";
import { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type QA = {
  question: string;
  answer: ReactNode;
};

const QUESTIONS_AND_ANSWERS: Array<QA> = [
  {
    question: "Is Spencer authorized to work in the US?",
    answer: "Yes. Spencer is a United States citizen.",
  },
  {
    question: "Where is Spencer located?",
    answer: "Spencer lives in Seattle, Washington.",
  },
  {
    question:
      "Do you have any professional references who can speak to your work experience and skills?",
    answer: (
      <Typography>
        Yes. Please reach out via the{" "}
        <Link href={"/contact"}>contact form</Link> for details.
      </Typography>
    ),
  },
  {
    question: "Does Spencer prefer working remotely or in an office?",
    answer: "Spencer prefers working remotely.",
  },
  {
    question:
      "Have you worked remotely before? Are you comfortable working remotely if necessary?",
    answer:
      "Yes, Spencer has worked remotely for the past several years. Spencer prefers working remotely.",
  },
  {
    question: "Is Spencer willing to relocate if the job requires it?",
    answer:
      "No, Spencer will not relocate. However, he is able to work remotely.",
  },
  {
    question:
      "Are you willing to undergo a background check and drug screening?",
    answer: "Yes.",
  },
  {
    question: "Have you ever been convicted of a felony or misdemeanor?",
    answer: "No.",
  },
  {
    question:
      "Have you ever been a party to a lawsuit, arbitration, or settlement involving a previous employer?",
    answer: "No.",
  },
  {
    question: "What is Spencer's expected salary range?",
    answer: (
      <Typography>
        Please reach out via the <Link href={"/contact"}>contact form</Link> in
        order to discuss salary.
      </Typography>
    ),
  },
];

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Spencewenski | FAQ</title>
      </Head>

      <Typography variant={"h4"} gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Grid container spacing={2}>
        {QUESTIONS_AND_ANSWERS.map((qa) => (
          <Grid item xs={12} key={qa.question}>
            <Paper
              variant={"outlined"}
              sx={{ backgroundColor: "#f4f4f4", padding: "1em" }}
            >
              <Typography variant={"h5"}>{qa.question}</Typography>
              {typeof qa.answer === "string" ? (
                <Typography>{qa.answer}</Typography>
              ) : (
                qa.answer
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
