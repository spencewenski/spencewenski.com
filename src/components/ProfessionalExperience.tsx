import AmazonExperience from "@/components/AmazonExperience";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";

const BoxExperience = dynamic(() => import("@/components/BoxExperience"));

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
