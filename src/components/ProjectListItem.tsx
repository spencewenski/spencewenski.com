import { Paper } from "@mui/material";
import ProjectDetails, { ProjectInfo } from "@/components/ProjectDetails";

export type Input = {
  projectInfo: ProjectInfo;
};

export default function ProjectListItem({ projectInfo }: Input) {
  return (
    <Paper
      variant={"outlined"}
      sx={{ backgroundColor: "#f4f4f4", padding: "1em" }}
    >
      <ProjectDetails projectInfo={projectInfo} />
    </Paper>
  );
}
