import { Grid, Paper, Typography } from "@mui/material";

export default function AmazonExperience({}) {
  return (
    <>
      <Typography variant={"h5"}>Amazon</Typography>
      <Paper
        variant={"outlined"}
        sx={{ backgroundColor: "#f4f4f4", padding: "1em" }}
      >
        <Grid container spacing={2}>
          <Grid
            container
            item
            xs={12}
            justifyContent={"space-between"}
            alignItems={"flex-end"}
          >
            <Grid item xs={"auto"}>
              <Typography variant={"h6"}>
                Software Development Engineer II
              </Typography>
            </Grid>
            <Grid item xs={"auto"}>
              <Typography>Apr 2018 - Present</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
