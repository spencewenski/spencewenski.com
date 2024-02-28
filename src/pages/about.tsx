import Head from "next/head";
import { Typography } from "@mui/material";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import BulletedList, { Input } from "@/components/BulletedList";
import React from "react";

const UPDATED: string = "27 Feb 2024";
const DONE_PREVIOUSLY: Input["listItems"] = [
  "I have run a couple half marathons and would love to run a full marathon in the next couple years.",
  "I love playing video games and watching movies and TV.",
  <>
    I love playing around with new (to me) technologies. A roughly chronological
    list of things I&apos;ve played around with include C/C++, Unity/C#,{" "}
    <Link href={"https://en.wikipedia.org/wiki/Pebble_(watch)"}>Pebble</Link>,
    <Link href={"https://godotengine.org/"}>Godot</Link>, Raspberry Pi, Rust,
    React (<Link href={"https://nextjs.org/"}>NextJS</Link>), and{" "}
    <Link href={"https://tauri.app/"}>Tauri</Link>.
  </>,
];

export default function About() {
  return (
    <>
      {" "}
      <Head>
        <title>Spencewenski | About</title>
      </Head>
      <>
        <Typography variant={"h3"}>About</Typography>
        <Typography variant={"subtitle1"}>
          A brief summary of what I&apos;ve worked on in the past, mostly on a
          personal level. See my <Link href={"/"}>portfolio page</Link> for more
          details.
        </Typography>
        <Typography variant={"subtitle2"}>Last updated: {UPDATED}</Typography>
        <SectionWrapper>
          <BulletedList listItems={DONE_PREVIOUSLY} />
        </SectionWrapper>
      </>
    </>
  );
}
