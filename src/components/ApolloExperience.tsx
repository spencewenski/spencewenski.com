import { Divider, Grid, Typography } from "@mui/material";
import SectionWrapper from "@/components/SectionWrapper";
import RoleAndDate from "@/components/RoleAndDate";
import BulletedList from "@/components/BulletedList";
import TechnologiesList from "@/components/TechnologiesList";

const APOLLO_SENIOR_ENGINEER: Array<string> = [
  "Created workflow trigger to automate followups when prospects do not attend sales calls; closed 1M USD gap in ARR",
  "Improved latency of the Coaching Analytics module by 10x using Elasticsearch aggregations",
  "Added integration between Conversations and Tasks to improve WAU metric",
  "Lead company-wide initiative to adopt Sorbet type system; increased coverage from 7% to 35% in one year, resulting in significantly fewer bugs and higher developer velocity due to improved IDE type inference",
  "Collaborated across teams to improve stability of Pre-Meeting Insights; reduced latency by 7x and error rate by 10x",
  "Reduced cost of conversation recording storage by 100K USD / year",
  "Increased conversation processing workflow success rate from less than 70% to over 95%",
  "Prevented privacy/security issues by creating access policies for our DB entities",
  "Created framework to generate an OpenAPI schema from Sorbet-annotated Rails controller methods",
  "Heavily involved in code reviews to spread knowledge, encourage best practices, and catch performance/security issues",
  "Defines high-level system architecture and reviews the team's engineering designs",
  "Performs technical interviews and mentors team members to achieve IC-track promotions",
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
