import Head from "next/head";
import { Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      {" "}
      <Head>
        <title>Spencewenski | About</title>
      </Head>
      <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant={"h3"}>About</Typography>
          </Grid>
        </Grid>
      </>
    </>
  );
}
