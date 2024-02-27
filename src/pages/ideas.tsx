import Head from "next/head";
import { Grid, Typography } from "@mui/material";
import ProfessionalExperience from "@/components/ProfessionalExperience";

export default function Ideas() {
  return (
    <>
      <Head>
        <title>Spencewenski | Ideas</title>
      </Head>
      <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant={"h3"}>Ideas</Typography>
          </Grid>
        </Grid>
      </>
    </>
  );
}
