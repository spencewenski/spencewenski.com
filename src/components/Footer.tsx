import { AppBar, Grid } from "@mui/material";

export default function Footer({}) {
  return (
    <>
      <AppBar
        position={"static"}
        sx={{
          top: "auto",
          bottom: 0,
          marginTop: "1em",
          backgroundColor: "#282828",
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems={"center"}
          marginTop={"1em"}
        ></Grid>
      </AppBar>
    </>
  );
}
