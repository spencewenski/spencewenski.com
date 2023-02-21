import { Paper } from "@mui/material";

export default function SectionWrapper({ children }: any) {
  return (
    <Paper
      variant={"outlined"}
      sx={{ backgroundColor: "#f4f4f4", padding: "1em" }}
    >
      {children}
    </Paper>
  );
}
