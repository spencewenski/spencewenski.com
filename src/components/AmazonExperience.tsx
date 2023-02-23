import { Grid, Typography } from "@mui/material";
import ProjectDetails, { ProjectInfo } from "@/components/ProjectDetails";
import BulletedList from "@/components/BulletedList";
import SectionWrapper from "@/components/SectionWrapper";
import RoleAndDate from "@/components/RoleAndDate";

const WSIW_PROJECT_INFO: ProjectInfo = {
  title: '"Alexa, What Should I Watch?" (Current Project)',
  imageUrl: "/wsiw_preview.jpeg",
  summary: [
    '"What Should I Watch?" is a conversational Alexa skill for FireTV that recommends content to watch. I work closely with PMs/TPMs to align on the desired features, with UX on how to best design the features, and with the Alexa Conversations team to implement our dialog model and improve the Alexa Conversations platform.',
    "The backend skill code is written using Java/Spring and is deployed on EC2, the UI is written using Alexa APL, and the dialog model is written using ACDL",
  ],
  technologies: ["Java", "Spring", "Alexa", "AWS"],
};

const SDE_II_NOTABLE_ACHIEVEMENTS: Array<string> = [
  "Designed and implemented an Android application to enable Amazon Music and other media apps to integrate with Alexa for fully featured voice support",
  "Collaborated with the Alexa Video team to enable playing a specific season and episode of a show using voice",
  "Lead project to ensure operational readiness of multiple services ahead of expected holiday traffic spikes",
  "Investigated numerous issues involving multiple services owned by various different teams",
  "Performed code reviews regularly to maintain code quality, share knowledge, and mentor team members",
  "Mentored interns and new hires to help them become confident and productive members of the team",
  "Interviewed candidates at my level and below across multiple technical and leadership competencies",
];

const SDE_I_NOTABLE_ACHIEVEMENTS: Array<string> = [
  "Added auto-scrolling lyrics to the Alexa Music UI on FireTV using Android RecyclerView and Media Session",
  "Extended an Android service to report media state to Alexa and enable transport controls in 3P applications without requiring the 3P developers to do any extra work to integrate",
  "Ran sprint planning, sprint retrospectives, and standup as my team's Scrum Master",
];

const SDE_INTERN_NOTABLE_ACHIEVEMENTS: Array<string> = [
  "Extended an internal developer tool to help with analyzing Android log les using Python and JavaScript",
];

export default function AmazonExperience({}) {
  return (
    <>
      <Typography variant={"h4"}>Amazon</Typography>
      <SectionWrapper>
        <Grid container>
          <RoleAndDate
            role={"Software Development Engineer II"}
            start={"Apr 2018"}
            end={"Present"}
          />
          <Grid item xs={12}>
            <ProjectDetails projectInfo={WSIW_PROJECT_INFO} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"h6"}>Other Notable Achievements</Typography>
            <BulletedList listItems={SDE_II_NOTABLE_ACHIEVEMENTS} />
          </Grid>
          <RoleAndDate
            role={"Software Development Engineer"}
            start={"Aug 2016"}
            end={"Apr 2018"}
          />
          <Grid item xs={12}>
            <BulletedList listItems={SDE_I_NOTABLE_ACHIEVEMENTS} />
          </Grid>
          <RoleAndDate
            role={"Software Development Engineer Intern"}
            start={"May 2015"}
            end={"Aug 2015"}
          />
          <Grid item xs={12}>
            <BulletedList listItems={SDE_INTERN_NOTABLE_ACHIEVEMENTS} />
          </Grid>
        </Grid>
      </SectionWrapper>
    </>
  );
}
