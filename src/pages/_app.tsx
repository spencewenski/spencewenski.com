import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "@/components/Layout";

const THEME = createTheme();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
