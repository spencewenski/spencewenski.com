import Head from "next/head";
import { Typography } from "@mui/material";
import SectionWrapper from "@/components/SectionWrapper";
import BulletedList from "@/components/BulletedList";

const UPDATED: string = "27 Feb 2024";
const DOING_NOW: Array<string> = [];

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
        <Typography variant={"subtitle2"}>Last updated: {UPDATED}</Typography>
        <SectionWrapper>
          <BulletedList listItems={DOING_NOW} />
        </SectionWrapper>
      </>
    </>
  );
}
