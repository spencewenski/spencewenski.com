import ProjectListItem from "@/components/ProjectListItem";
import { Grid, Typography } from "@mui/material";
import { ProjectInfo } from "@/components/ProjectDetails";
import MassDissentPreview from "@/images/mass_dissent_preview.webp";
import GroupedTimersPreview from "@/images/grouped_timers_preview.png";
import Link from "next/link";

const PROJECTS: Array<ProjectInfo> = [
  {
    title: "PGMQ (Collaborator; 5K Stars)",
    summary: [
      <>Message queue similar to AWS SQS but backed by Postgres.</>,
      // eslint-disable-next-line react/jsx-key
      <ul>
        <li>
          Lightweight - No background worker or external dependencies, just
          Postgres and Rust
        </li>
        <li>
          Guaranteed &quot;exactly once&quot; delivery of messages to a consumer
          within a visibility timeout
        </li>
        <li>API parity with AWS SQS</li>
        <li>
          FIFO (First-In-First-Out) queues with message group keys for ordered
          processing
        </li>
        <li>
          Topic-based routing with wildcard patterns for publish-subscribe and
          content-based routing
        </li>
        <li>Messages stay in the queue until explicitly removed</li>
        <li>
          Messages can be archived, instead of deleted, for long-term retention
          and replayability
        </li>
        <li>Completely asynchronous API</li>
      </ul>,
    ],
    technologies: ["Rust", "Postgres"],
    source: "https://github.com/pgmq/pgmq",
  },
  {
    title: "Roadster",
    summary: [
      <>
        A &quot;Batteries Included&quot; web framework for rust designed to get
        you moving fast 🏎️. Inspired by other fully-featured frameworks such as{" "}
        <Link href={"https://rubyonrails.org/"}>Rails</Link>,{" "}
        <Link href={"https://www.djangoproject.com/"}>Django</Link>,{" "}
        <Link href={"https://laravel.com/"}>Laravel</Link>, and{" "}
        <Link href={"https://github.com/loco-rs/loco"}>Loco</Link>.
      </>,
      // eslint-disable-next-line react/jsx-key
      <ul>
        <li>
          Built on <Link href={"https://tokio.rs/"}>Tokio&apos;s</Link> web
          stack (axum, tower, hyper, tracing). App behavior can be easily
          extended by taking advantage of all the resources in the tokio
          ecosystem.
        </li>
        <li>
          Provides sensible defaults so you can focus on building your app. Most
          of the built-in behavior can be customized or even disabled via
          per-environment configuration files.
        </li>
        <li>
          Auto-generates an OpenAPI schema for routes defined with{" "}
          <Link href={"https://crates.io/crates/aide"}>aide</Link>.
        </li>
        <li>
          Built-in support for{" "}
          <Link href={"https://crates.io/crates/sea-orm"}>SeaORM</Link> and{" "}
          <Link href={"https://crates.io/crates/diesel"}>Diesel</Link>,
          including creating DB connections and running DB migrations.
        </li>
        <li>
          Built-in support for{" "}
          <Link href={"https://crates.io/crates/rusty-sidekiq"}>
            Sidekiq.rs
          </Link>{" "}
          for running async/background jobs.
        </li>
        <li>
          Structured logs/traces using Tokio&apos;s{" "}
          <Link href={"https://docs.rs/tracing/latest/tracing/"}>tracing</Link>{" "}
          crate. Traces/metrics can be exported using OpenTelemetry.
        </li>
      </ul>,
    ],
    technologies: [
      "Rust",
      "Sidekiq",
      "Postgres",
      "SeaORM",
      "Diesel",
      "OpenAPI",
      "Open Telemetry",
    ],
    source: "https://github.com/roadster-rs/roadster",
    website: "https://roadster.dev",
  },
  {
    title: "Mass Dissent",
    imageUrl: MassDissentPreview,
    imageWidth: 2880,
    imageHeight: 1822,
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
    website: "https://twitter-mailer-app-massdissent.vercel.app/",
  },
  {
    title: "Grouped Timers for Pebble",
    imageUrl: GroupedTimersPreview,
    imageWidth: 594,
    imageHeight: 228,
    summary: [
      "A timer app for Pebble watches written in C that allows grouping timers into lists.",
    ],
    technologies: ["C", "Pebble", "MVC"],
    source: "https://gitlab.com/spencewenski/pebble_grouped_timers",
    website:
      "https://apps.repebble.com/en_US/application/58f985730dfc329fda001649",
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
        <Grid key={project.title} size={{ xs: 12 }}>
          <ProjectListItem projectInfo={project} />
        </Grid>
      ))}
    </Grid>
  );
}
