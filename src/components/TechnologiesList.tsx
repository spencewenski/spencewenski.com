import { Chip, Grid } from "@mui/material";

export type Input = {
  technologies: Array<string>;
};

export default function TechnologiesList({ technologies }: Input) {
  return (
    <>
      <Grid container spacing={1} marginBottom={"1em"}>
        {technologies.map((technology) => (
          <Grid key={technology} size={{ xs: "auto" }}>
            <Chip variant={"outlined"} label={technology} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
