import Head from "next/head";
import { Typography } from "@mui/material";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import BulletedList from "@/components/BulletedList";

const UPDATED: string = "27 Feb 2024";
const DONE_PREVIOUSLY: Array<string> = [
  "I have run a couple half marathons and would love to run a full marathon in the next couple years.",
  "I love playing video games and watching movies and TV.",
  "I love playing around with new (to me) technologies. A roughly chronological list of things I've played around with include C/C++, Unity/C#, Pebble, Godot, Raspberry Pi, Rust, React (NextJS), and Tauri.",
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
