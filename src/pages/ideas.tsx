import Head from "next/head";
import { Typography } from "@mui/material";
import BulletedList from "@/components/BulletedList";
import SectionWrapper from "@/components/SectionWrapper";

const UPDATED: string = "27 Feb 2024";
const IDEAS: Array<string> = [
  "Mobile app to count stitches in crochet and knitting projects. Track statistics around time to complete rows/sections/projects, estimate time to finish projects, etc.",
  "REST API service written in Rust. Not sure what the service would do yet. Maybe some SaaS API.",
];

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
        <Typography variant={"subtitle2"}>Last updated: {UPDATED}</Typography>
        <SectionWrapper>
          <BulletedList listItems={IDEAS} />
        </SectionWrapper>
      </>
    </>
  );
}
