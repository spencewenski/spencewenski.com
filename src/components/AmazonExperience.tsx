import { Grid, Typography } from "@mui/material";
import ProjectDetails, { ProjectInfo } from "@/components/ProjectDetails";
import BulletedList from "@/components/BulletedList";
import SectionWrapper from "@/components/SectionWrapper";
import RoleAndDate from "@/components/RoleAndDate";
import WsiwImagePreview from "@/images/wsiw_preview.webp";

const WSIW_PROJECT_INFO: ProjectInfo = {
  title: '"Alexa, What Should I Watch?"',
  imageUrl: WsiwImagePreview,
  imageWidth: 1920,
  imageHeight: 1080,
  imagePriority: true,
  summary: [
    '"What Should I Watch?" (WSIW) is a conversational Alexa skill for FireTV that recommends content to watch. I worked closely with PMs/TPMs to align on the desired features, with UX on how to best design the features, and with the Alexa Conversations team to implement our dialog model and improve the Alexa Conversations platform.',
    "The backend skill code was written using Java/Spring and was deployed on EC2, the UI was written using Alexa APL, and the dialog model was written using ACDL.",
  ],
  technologies: ["Java", "Spring", "Alexa", "AWS"],
};

const SDE_II_NOTABLE_ACHIEVEMENTS: Array<string> = [
  "Managed multiple beta releases before the public release of WSIW.",
  "Collaborated with an Alexa Science team to improve the level of personalization of our recommendations.",
  "Ran A/B tests to measure how new features and UX changes impact our key metrics.",
  "Developed an Android application to enable Amazon Music and other media apps to integrate with Alexa for fully featured voice support.",
  "Worked with the Alexa Video team to enable playing a specific season and episode of a show using Alexa.",
  "Ran a working group to improve the operational excellence of my team's (and our sister team's) code.",
  "Actively involved in mentoring, code reviews, and interviewing.",
];

const SDE_I_NOTABLE_ACHIEVEMENTS: Array<string> = [
  "Developed an Android service to automatically enable using Alexa for transport controls (play/pause/etc) in 3P applications.",
  "Added auto-scrolling lyrics to the Alexa Music UI on FireTV.",
  "Ran sprint planning, sprint retrospectives, and standup as my team's Scrum Master.",
];

const SDE_INTERN_NOTABLE_ACHIEVEMENTS: Array<string> = [
  "Created a developer tool to help with analyzing Android log files.",
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
            end={"June 2023"}
          />
          <Grid item xs={12}>
            <ProjectDetails projectInfo={WSIW_PROJECT_INFO} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"h6"} marginTop={1}>
              Other Notable Achievements
            </Typography>
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
