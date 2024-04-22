import TechnologiesList from "@/components/TechnologiesList";

const TECHNOLOGIES: Array<string> = [
  "Rails",
  "React",
  "TypeScript",
  "JavaScript",
  "Rust",
  "Java",
  "Next.js",
  "Python",
  "C",
  "C++",
  "C#",
  "Git",
  "Android",
  "AIDL",
  "Linux",
  "AWS",
  "New Relic",
  "GraphQL",
  "tRPC",
  "REST",
  "Postgres",
  "Supabase",
  "SQL",
  "MongoDB",
  "Spring",
  "Guice",
  "Dagger",
  "Mockito",
  "TestNG",
  "JUnit",
  "Robolectric",
  "Godot",
  "Unity",
  "GitHub Actions",
  "IntelliJ",
  "Pebble",
  "Raspberry Pi",
  "Jira",
];

export default function Technologies({}) {
  return (
    <>
      <TechnologiesList technologies={TECHNOLOGIES} />
    </>
  );
}
