import { Divider, Grid, Typography } from "@mui/material";
import SectionWrapper from "@/components/SectionWrapper";
import RoleAndDate from "@/components/RoleAndDate";
import BulletedList from "@/components/BulletedList";
import TechnologiesList from "@/components/TechnologiesList";

const APOLLO_SENIOR_ENGINEER: Array<string> = [
  "Improved latency of the Coaching Analytics module by 10x using Elasticsearch aggregations",
  "Created workflow trigger critical in closing 300K - 1M gap in ARR",
  "Added integration between Conversations and Tasks to improve WAU metric",
  "Reduced cost of conversation recording storage by 100K USD / year",
  "Increased conversation processing workflow success rate from less than 70% to over 95%",
  "Improved stability of the Pre-Meeting Insights feature by reducing latency by 7x and error rate by 10x",
  "Prevented privacy/security issues by creating access policies for our DB entities",
  "Lead adoption of Sorbet; increased coverage from 7% to 35% in one year for a 60% reduction in production type errors",
  "Created framework to generate an OpenAPI schema from Sorbet-annotated Rails controller methods",
  "Defines high-level architecture requirements and reviews the team's engineering designs",
  "Efficiently builds new features using Rails and reusable React components, complete with automated tests",
  "Performs interviews and regularly meets with team members for mentorship and team health check-ins",
  "Heavily involved in code reviews to spread knowledge, encourage best practices, and catch performance/security issues",
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
