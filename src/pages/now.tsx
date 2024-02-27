import Head from "next/head";
import { Typography } from "@mui/material";

export default function Now() {
  return (
    <>
      <Head>
        <title>Spencewenski | Now</title>
      </Head>
      <>
        <Typography variant={"h3"}>Now</Typography>
        <Typography variant={"subtitle1"}>
          What I&apos;m working on now.
        </Typography>
        <Typography variant={"subtitle2"}>Last updated: 27 Feb 2024</Typography>
      </>
    </>
  );
}
