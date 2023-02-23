import { Grid, Typography } from "@mui/material";
import useBreakpointIsAtLeast from "@/hooks/useBreakpointIsAtLeast";

export type Input = {
  role: string;
  start: string;
  end: string;
};

export default function RoleAndDate({ role, start, end }: Input) {
  const isLargeScreen = useBreakpointIsAtLeast({ breakpoint: "sm" });

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
          <Typography variant={isLargeScreen ? "h5" : undefined}>
            {role}
          </Typography>
        </Grid>
        <Grid item xs={"auto"}>
          <Typography variant={isLargeScreen ? "h6" : "caption"}>
            {start} - {end}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
