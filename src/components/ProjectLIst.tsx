import ProjectListItem, { ProjectInfo } from "@/components/ProjectListItem";
import { Grid } from "@mui/material";

const PROJECTS: Array<ProjectInfo> = [
  // {
  //   title: "Mass Dissent",
  //   imageUrl: "/mass_dissent_preview.png",
  //   imageWidth: 100,
  //   imageHeight: 100,
  //   summary:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   technologies: ["Next.js", "TypeScript", "tRPC"],
  //   website: "https://massdissent.com",
  //   source: "http://example.com",
  // },
  // {
  //   title: "Mass Dissent",
  //   imageUrl: "/mass_dissent_preview.png",
  //   imageWidth: 100,
  //   imageHeight: 100,
  //   summary:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   technologies: ["Next.js", "TypeScript", "tRPC"],
  // },
  // {
  //   title: "Mass Dissent",
  //   imageUrl: "/mass_dissent_preview.png",
  //   imageWidth: 100,
  //   imageHeight: 100,
  //   summary:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   technologies: ["Next.js", "TypeScript", "tRPC"],
  // },
  // {
  //   title: "Mass Dissent",
  //   imageUrl: "/mass_dissent_preview.png",
  //   imageWidth: 100,
  //   imageHeight: 100,
  //   summary:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   technologies: ["Next.js", "TypeScript", "tRPC"],
  // },
];

export default function ProjectList({}) {
  return (
    <Grid container spacing={2}>
      {PROJECTS.map((project, index) => (
        <Grid key={project.title} item xs={12}>
          <ProjectListItem projectInfo={project} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}
