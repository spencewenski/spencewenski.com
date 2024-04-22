import { Grid, Typography } from "@mui/material";
import SectionWrapper from "@/components/SectionWrapper";
import RoleAndDate from "@/components/RoleAndDate";
import BulletedList from "@/components/BulletedList";

const APOLLO_SENIOR_ENGINEER: Array<string> = [
  "Senior engineer and tech lead on the Conversation Intelligence team",
  "Defines high-level architecture requirements",
  "Reviews and sign off on the team's engineering design reviews",
  "Works with PM and UX/UI designers to define new features",
  "Performs interviews for the company",
  "Initiated engineering design reviews on our team",
  "Improved observability of our system with detailed metrics",
];

export default function ApolloExperience({}) {
  return (
    <>
      <Typography variant={"h4"}>Apollo.io</Typography>
      <SectionWrapper>
        <Grid container>
          <RoleAndDate
            role={"Senior Software Engineer II"}
            start={"July 2023"}
            end={"Present"}
          />
          <Grid item xs={12}>
            <BulletedList listItems={APOLLO_SENIOR_ENGINEER} />
          </Grid>
        </Grid>
      </SectionWrapper>
    </>
  );
}
