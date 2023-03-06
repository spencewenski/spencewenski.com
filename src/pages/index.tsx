import Head from "next/head";
import { Grid, Typography } from "@mui/material";
import ProjectList from "@/components/ProjectList";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spencewenski</title>
      </Head>
      <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant={"h3"}>Professional Experience</Typography>
            <ProfessionalExperience />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"h3"}>Personal Projects</Typography>
            <ProjectList />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"h3"}>Technologies</Typography>
            <Technologies />
          </Grid>
        </Grid>
      </>
    </>
  );
}
