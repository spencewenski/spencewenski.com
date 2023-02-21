import AmazonExperience from "@/components/AmazonExperience";
import BoxExperience from "@/components/BoxExperience";
import { Grid } from "@mui/material";

export default function ProfessionalExperience({}) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AmazonExperience />
        </Grid>
        <Grid item xs={12}>
          <BoxExperience />
        </Grid>
      </Grid>
    </>
  );
}
