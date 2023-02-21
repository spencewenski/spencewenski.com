import { Grid, Typography } from "@mui/material";

export type Input = {
  role: string;
  start: string;
  end: string;
};

export default function RoleAndDate({ role, start, end }: Input) {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
      >
        <Grid item xs={"auto"}>
          <Typography variant={"h5"}>{role}</Typography>
        </Grid>
        <Grid item xs={"auto"}>
          <Typography>
            {start} - {end}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
