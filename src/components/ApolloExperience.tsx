import { Divider, Grid, Typography } from "@mui/material";
import SectionWrapper from "@/components/SectionWrapper";
import RoleAndDate from "@/components/RoleAndDate";
import BulletedList from "@/components/BulletedList";
import TechnologiesList from "@/components/TechnologiesList";

const APOLLO_SENIOR_ENGINEER: Array<string> = [
  "Senior engineer and tech lead on the Conversation Intelligence team",
  "Lead adoption of the Sorbet type system for Apollo's Ruby on Rails monolith",
  "Increased conversation processing workflow success rate from less than 70% to over 95%",
  "Created framework to generate an OpenAPI schema from Sorbet-annotated Rails controller methods",
  "Partners with PM, Research, and Design to develop CX improvements and drive adoption of our features",
  "Efficiently builds new features using Rails and reusable React components, complete with automated tests",
];

const TECHNOLOGIES: Array<string> = [
  "Rails",
  "Ruby",
  "Sidekiq",
  "Sorbet",
  "React",
  "MongoDB",
  "TypeScript",
  "Docker",
  "Kubernetes",
  "Grafana",
  "Open Telemetry",
  "New Relic",
];

export default function ApolloExperience({}) {
  return (
    <>
      <Typography variant={"h4"}>Apollo.io</Typography>
      <SectionWrapper>
        <Grid container>
          <RoleAndDate
            role={"Senior Software Engineer"}
            start={"July 2023"}
            end={"Present"}
          />
          <Grid size={{ xs: 12 }}>
            <BulletedList listItems={APOLLO_SENIOR_ENGINEER} />
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: "1em" }} />
        <TechnologiesList technologies={TECHNOLOGIES} />
      </SectionWrapper>
    </>
  );
}
