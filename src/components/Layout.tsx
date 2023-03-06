import { Box, Container, CssBaseline } from "@mui/material";
import Summary from "@/components/Summary";

export default function Layout({ children }: any) {
  return (
    <Box marginBottom={2}>
      <Container>
        <CssBaseline />
        <Summary />
        {children}
      </Container>
    </Box>
  );
}
