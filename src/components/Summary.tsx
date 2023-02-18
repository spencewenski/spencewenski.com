import { Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function Summary({}) {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant={"h2"} align={"center"}>
            Spencer Ferris
          </Typography>
        </Grid>
        <Grid item xs={12} container spacing={2} justifyContent={"center"}>
          <Grid item xs={"auto"}>
            <Link href={"https://github.com/spencewenski"}>GitHub</Link>
          </Grid>
          <Grid item xs={"auto"}>
            <Link href={"https://gitlab.com/spencewenski"}>GitLab</Link>
          </Grid>
          <Grid item xs={"auto"}>
            <Link href={"https://sr.ht/~spencewenski"}>SourceHut</Link>
          </Grid>
          <Grid item xs={"auto"}>
            <Link href={"mailto:portfolio@spencewenski.com"}>Contact</Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
