import type { AppProps } from "next/app";
import { createTheme, Shadows, ThemeProvider } from "@mui/material";
import Layout from "@/components/Layout";
import { trpc } from "@/utils/trpc";

const THEME = createTheme({
  shadows: Array(25).fill("none") as Shadows,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default trpc.withTRPC(App);
