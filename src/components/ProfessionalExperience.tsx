import AmazonExperience from "@/components/AmazonExperience";
import BoxExperience from "@/components/BoxExperience";
import { Grid } from "@mui/material";
import ApolloExperience from "@/components/ApolloExperience";

export default function ProfessionalExperience({}) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <ApolloExperience />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <AmazonExperience />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <BoxExperience />
        </Grid>
      </Grid>
    </>
  );
}
