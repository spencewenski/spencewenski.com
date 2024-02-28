import TechnologiesList from "@/components/TechnologiesList";

const TECHNOLOGIES: Array<string> = [
  "Java",
  "Rust",
  "Next.js",
  "React",
  "TypeScript",
  "Rails",
  "JavaScript",
  "Python",
  "C",
  "C++",
  "C#",
  "Git",
  "Android",
  "AIDL",
  "Linux",
  "AWS",
  "GraphQL",
  "tRPC",
  "REST",
  "Postgres",
  "Supabase",
  "SQL",
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
