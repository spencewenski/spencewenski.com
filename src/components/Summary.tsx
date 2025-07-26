import { Button, Grid, SvgIcon, Typography } from "@mui/material";
import Link from "next/link";
import GitHubIcon from "@/images/github-mark.svg";
import GitLabIcon from "@/images/gitlab-logo-500.svg";
import SourceHutLogo from "@/images/sourcehut.svg";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import {
  Architecture,
  Code,
  Create,
  Info,
  Lightbulb,
} from "@mui/icons-material";

export default function Summary({}) {
  return (
    <>
      <Grid container marginBottom={2} spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Link
            href={"/"}
            passHref={true}
            prefetch={false}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant={"h2"} align={"center"}>
              Spencer Ferris
            </Typography>
          </Link>
        </Grid>
        <Grid size={{ xs: 12 }} container spacing={2} justifyContent={"center"}>
          <Grid size={{ xs: "auto" }}>
            <Link
              href={"https://github.com/spencewenski"}
              passHref={true}
              prefetch={false}
            >
              <Button
                variant={"contained"}
                startIcon={
                  <SvgIcon component={GitHubIcon} viewBox={"0 0 100 100"} />
                }
              >
                GitHub
              </Button>
            </Link>
          </Grid>
          <Grid size={{ xs: "auto" }}>
            <Link href={"/faq"} passHref={true} prefetch={false}>
              <Button variant={"contained"} startIcon={<QuestionAnswerIcon />}>
                FAQ
              </Button>
            </Link>
          </Grid>
          <Grid size={{ xs: "auto" }}>
            <Link href={"/contact"} passHref={true} prefetch={false}>
              <Button variant={"contained"} startIcon={<EmailIcon />}>
                Contact
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
