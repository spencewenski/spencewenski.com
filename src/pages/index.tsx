import Head from "next/head";
import { Container, Grid, Typography } from "@mui/material";
import ProjectList from "@/components/ProjectList";
import Summary from "@/components/Summary";
import ProfessionalExperience from "@/components/ProfessionalExperience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spencewenski</title>
      </Head>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Summary />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"h4"}>Professional Experience</Typography>
            <ProfessionalExperience />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"h4"}>Personal Projects</Typography>
            <ProjectList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
