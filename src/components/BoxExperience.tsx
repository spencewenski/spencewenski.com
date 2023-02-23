import { Typography } from "@mui/material";
import SectionWrapper from "@/components/SectionWrapper";
import RoleAndDate from "@/components/RoleAndDate";
import BulletedList from "@/components/BulletedList";

const INTERNSHIP_ACHIEVEMENTS: Array<string> = [
  "Created a full stack application for tracking incident retrospectives using the LAMP stack and a custom REST API.",
];

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
      </SectionWrapper>
    </>
  );
}
