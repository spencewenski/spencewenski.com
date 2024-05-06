import { Divider, Typography } from "@mui/material";
import SectionWrapper from "@/components/SectionWrapper";
import RoleAndDate from "@/components/RoleAndDate";
import BulletedList from "@/components/BulletedList";
import TechnologiesList from "@/components/TechnologiesList";

const INTERNSHIP_ACHIEVEMENTS: Array<string> = [
  "Created a web app for tracking incident retrospectives using the LAMP stack and a custom REST API.",
];

const TECHNOLOGIES: Array<string> = ["Angular", "PHP", "MySQL", "LAMP"];

export default function BoxExperience({}) {
  return (
    <>
      <Typography variant={"h4"}>Box</Typography>
      <SectionWrapper>
        <RoleAndDate
          role={"Software Engineering Intern"}
          start={"Jun 2014"}
          end={"Aug 2014"}
        />
        <BulletedList listItems={INTERNSHIP_ACHIEVEMENTS} />
        <Divider style={{ marginBottom: "1em" }} />
        <TechnologiesList technologies={TECHNOLOGIES} />
      </SectionWrapper>
    </>
  );
}
