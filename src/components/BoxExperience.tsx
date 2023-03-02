import { Typography } from "@mui/material";
import SectionWrapper from "@/components/SectionWrapper";
import RoleAndDate from "@/components/RoleAndDate";
import BulletedList from "@/components/BulletedList";

const INTERNSHIP_ACHIEVEMENTS: Array<string> = [
  "Created a web app for tracking incident retrospectives using the Angular, SQL, and PHP (LAMP stack).",
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
