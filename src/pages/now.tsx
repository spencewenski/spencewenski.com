import Head from "next/head";
import { Typography } from "@mui/material";
import SectionWrapper from "@/components/SectionWrapper";
import BulletedList, { Input } from "@/components/BulletedList";
import Link from "next/link";

const UPDATED: string = "27 Feb 2024";
const DOING_NOW: Input["listItems"] = [
  <>
    I&apos;m playing around with a using Rust for a REST API service using{" "}
    <Link href={"https://docs.rs/axum/latest/axum/"}>Axum</Link>. Currently just
    trying to bootstrap a starter service with some essentials
    (auth/tracing/testing/etc).
  </>,
];

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
