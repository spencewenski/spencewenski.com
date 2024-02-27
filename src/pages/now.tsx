import Head from "next/head";
import { Grid, Typography } from "@mui/material";

export default function Now() {
  return (
    <>
      <Head>
        <title>Spencewenski | Now</title>
      </Head>
      <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant={"h3"}>Now</Typography>
          </Grid>
        </Grid>
      </>
    </>
  );
}
