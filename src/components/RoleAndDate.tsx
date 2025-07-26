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
        size={{ xs: 12 }}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
      >
        <Grid size={{ xs: 12, sm: 9 }}>
          <Typography variant={"h5"}>{role}</Typography>
        </Grid>
        <Grid size={{ xs: "auto" }}>
          <Typography>
            {start} - {end}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
