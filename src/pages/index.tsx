import Head from "next/head";
import { Container } from "@mui/material";
import ProjectList from "@/components/ProjectLIst";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spencewenski</title>
      </Head>
      <Container>
        <ProjectList />
      </Container>
    </>
  );
}
