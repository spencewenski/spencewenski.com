import { Divider, Grid, Typography } from "@mui/material";
import SectionWrapper from "@/components/SectionWrapper";
import RoleAndDate from "@/components/RoleAndDate";
import BulletedList from "@/components/BulletedList";
import TechnologiesList from "@/components/TechnologiesList";

const APOLLO_SENIOR_ENGINEER: Array<string> = [
  "Senior engineer and tech lead on the Conversation Intelligence team",
  "Lead adoption of the Sorbet type system for Apollo's Ruby on Rails monolith",
  "Defines high-level architecture requirements and reviews the team's engineering design reviews",
  "Efficiently builds new features using Rails and React, complete with automated tests",
  "Analyzes performance and stability of existing code and effectively fixes the more important issues",
  "Performs interviews and mentors new members of the team",
  "Improved the observability of our system by adding detailed metrics",
];

const TECHNOLOGIES: Array<string> = [
  "Rails",
  "React",
  "TypeScript",
  "Docker",
  "Kubernetes",
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
          <Grid item xs={12}>
            <BulletedList listItems={APOLLO_SENIOR_ENGINEER} />
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: "1em" }} />
        <TechnologiesList technologies={TECHNOLOGIES} />
      </SectionWrapper>
    </>
  );
}
