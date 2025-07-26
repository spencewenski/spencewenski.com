import Head from "next/head";
import { Grid, Typography } from "@mui/material";
import ProjectList from "@/components/ProjectList";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Technologies from "@/components/Technologies";
import { isEmpty } from "lodash";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spencewenski</title>
      </Head>
      <>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Typography variant={"h3"}>Professional Experience</Typography>
            <ProfessionalExperience />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography variant={"h3"}>Personal Projects</Typography>
            <ProjectList />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography variant={"h3"}>Technologies</Typography>
            <Technologies />
          </Grid>
        </Grid>
      </>
    </>
  );
}

// https://nextjs.org/docs/api-reference/data-fetching/get-static-props
// A `getStaticProps` method to enable checking at build time that required
// environment variables are configured.
export async function getStaticProps() {
  // Load environment variables and verify that they exist
  let missingEnvVars: string[] = [];
  if (!isEnvVarValid(process.env.SEND_GRID_MAIL_SEND_API_KEY)) {
    missingEnvVars.push("SEND_GRID_MAIL_SEND_API_KEY");
  }
  if (!isEnvVarValid(process.env.SEND_GRID_CONTACT_FORM_TEMPLATE_ID)) {
    missingEnvVars.push("SEND_GRID_CONTACT_FORM_TEMPLATE_ID");
  }
  if (!isEnvVarValid(process.env.SEND_GRID_CONTACT_FORM_EMAIL)) {
    missingEnvVars.push("SEND_GRID_CONTACT_FORM_EMAIL");
  }

  if (!isEmpty(missingEnvVars)) {
    throw `The following required env vars are not defined: ${missingEnvVars.join(
      ", ",
    )}`;
  }

  return {
    props: {},
  };
}

function isEnvVarValid(value?: string): boolean {
  return typeof value === "string" && !isEmpty(value);
}
