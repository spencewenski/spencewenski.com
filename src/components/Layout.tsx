import { Container, CssBaseline } from "@mui/material";
import Summary from "@/components/Summary";

export default function Layout({ children }: any) {
  return (
    <Container>
      <CssBaseline />
      <Summary />
      {children}
    </Container>
  );
}
