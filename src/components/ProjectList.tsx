import ProjectListItem from "@/components/ProjectListItem";
import { Grid } from "@mui/material";
import { ProjectInfo } from "@/components/ProjectDetails";

const PROJECTS: Array<ProjectInfo> = [
  {
    title: "Mass Dissent",
    imageUrl: "/mass_dissent_preview.png",
    summary: [
      "Mass Dissent is a website that provides an easy way to send a short message as physical mail to your representatives in the U.S. Congress. The site reduces the effort required to send a letter to an elected official, hopefully resulting in more people writing to their representatives regarding the issues they care about.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "tRPC",
      "Postgres",
      "SQL",
      "Rust",
      "Stripe",
      "Sendgrid",
      "Supabase",
    ],
    website: "https://massdissent.com",
  },
  {
    title: "Grouped Timers for Pebble",
    imageUrl: "/grouped_timers_preview.png",
    summary: [
      "Timer app for Pebble watches written in C that allows grouping timers into lists.",
    ],
    technologies: ["C", "Pebble", "MVC"],
    source: "https://gitlab.com/spencewenski/pebble_grouped_timers",
  },
  {
    title: "Financial Transaction Processor",
    summary: [
      "A simple CLI application written to transform transaction records of financial accounts to different formats for the purpose of importing into personal budgeting software.",
    ],
    technologies: ["Rust", "GitHub Actions"],
    source: "https://github.com/spencewenski/transaction_processor",
  },
];

export default function ProjectList({}) {
  return (
    <Grid container spacing={2}>
      {PROJECTS.map((project, index) => (
        <Grid key={project.title} item xs={12}>
          <ProjectListItem projectInfo={project} />
        </Grid>
      ))}
    </Grid>
  );
}
