import { Container, CssBaseline } from "@mui/material";
import Summary from "@/components/Summary";

const HEADER_HEIGHT = "64px";

export default function Layout({ children }: any) {
  return (
    <Container>
      <CssBaseline />
      <Summary />
      {children}
    </Container>
  );
}
