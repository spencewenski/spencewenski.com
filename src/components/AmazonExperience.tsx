import { Divider, Grid, Typography } from "@mui/material";
import ProjectDetails, { ProjectInfo } from "@/components/ProjectDetails";
import BulletedList from "@/components/BulletedList";
import SectionWrapper from "@/components/SectionWrapper";
import RoleAndDate from "@/components/RoleAndDate";
import WsiwImagePreview from "@/images/wsiw_preview.webp";
import TechnologiesList from "@/components/TechnologiesList";

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
  technologies: [],
};

const TECHNOLOGIES: Array<string> = [
  "Java",
  "Spring",
  "Alexa",
  "Android",
  "AWS",
  "Rust",
];

const SDE_II_NOTABLE_ACHIEVEMENTS: Array<string> = [
  "Created a new Alexa skill; collaborated with PMs on the desired UX, defined the architecture, and implemented the code",
  "Unblocked Spotify release on original FireTV Cube by adding support for full media playback control with Alexa",
  "Collaborated with the Alexa Video team to enable playing a specific season and episode of a show using voice",
  "Lead project to ensure operational readiness of multiple services ahead of expected holiday traffic spikes",
  "Performed code reviews regularly to maintain code quality, share knowledge, and mentor team members",
  "Interviewed candidates at my level and below across multiple technical and leadership competencies",
];

const SDE_I_NOTABLE_ACHIEVEMENTS: Array<string> = [
  "Implemented auto-scrolling lyrics in Alexa Music UI on FireTV using Android RecyclerView and Media Session",
  "Enhanced an Android service to relay media state to Alexa and facilitate seamless transport controls in third-party media apps",
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
          <Grid size={{ xs: 12 }}>
            <ProjectDetails projectInfo={WSIW_PROJECT_INFO} />
          </Grid>
          <Grid size={{ xs: 12 }}>
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
          <Grid size={{ xs: 12 }}>
            <BulletedList listItems={SDE_I_NOTABLE_ACHIEVEMENTS} />
          </Grid>
          <RoleAndDate
            role={"Software Development Engineer Intern"}
            start={"May 2015"}
            end={"Aug 2015"}
          />
          <Grid size={{ xs: 12 }}>
            <BulletedList listItems={SDE_INTERN_NOTABLE_ACHIEVEMENTS} />
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: "1em" }} />
        <TechnologiesList technologies={TECHNOLOGIES} />
      </SectionWrapper>
    </>
  );
}
