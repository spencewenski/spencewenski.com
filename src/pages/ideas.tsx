import Head from "next/head";
import { Typography } from "@mui/material";

export default function Ideas() {
  return (
    <>
      <Head>
        <title>Spencewenski | Ideas</title>
      </Head>
      <>
        <Typography variant={"h3"}>Ideas</Typography>
        <Typography variant={"subtitle1"}>
          Ideas for things I might want do work on later.
        </Typography>
        <Typography variant={"subtitle2"}>Last updated: 27 Feb 2024</Typography>
      </>
    </>
  );
}
