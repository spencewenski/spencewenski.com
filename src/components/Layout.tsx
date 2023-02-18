import { CssBaseline } from "@mui/material";

export default function Layout({ children }: any) {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
}
