import { Grid, Typography } from "@mui/material";
import SectionWrapper from "@/components/SectionWrapper";
import RoleAndDate from "@/components/RoleAndDate";

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
          <Typography>Conversation Intelligence team</Typography>
        </Grid>
      </SectionWrapper>
    </>
  );
}
