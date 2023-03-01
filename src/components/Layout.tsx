import { Box, CssBaseline } from "@mui/material";

export default function Layout({ children }: any) {
  return (
    <Box marginBottom={"1em"}>
      <CssBaseline />
      {children}
    </Box>
  );
}
