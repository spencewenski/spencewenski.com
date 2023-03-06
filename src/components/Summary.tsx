import { Button, Grid, SvgIcon, Typography } from "@mui/material";
import Link from "next/link";
import GitHubIcon from "@/images/github-mark.svg";
import GitLabIcon from "@/images/gitlab-logo-500.svg";
import SourcehutLogo from "@/images/sourcehut.svg";
import EmailIcon from "@mui/icons-material/Email";

export default function Summary({}) {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant={"h2"} align={"center"}>
            Spencer Ferris
          </Typography>
        </Grid>
        <Grid item xs={12} container spacing={2} justifyContent={"center"}>
          <Grid item xs={"auto"}>
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
          <Grid item xs={"auto"}>
            <Link
              href={"https://gitlab.com/spencewenski"}
              passHref={true}
              prefetch={false}
            >
              <Button
                variant={"contained"}
                startIcon={
                  <SvgIcon component={GitLabIcon} viewBox={"100 100 200 200"} />
                }
              >
                GitLab
              </Button>
            </Link>
          </Grid>
          <Grid item xs={"auto"}>
            <Link
              href={"https://sr.ht/~spencewenski"}
              passHref={true}
              prefetch={false}
            >
              <Button
                variant={"contained"}
                startIcon={
                  <SvgIcon component={SourcehutLogo} viewBox={"0 0 500 500"} />
                }
              >
                sourcehut
              </Button>
            </Link>
          </Grid>
          <Grid item xs={"auto"}>
            {/*<Link href={"mailto:portfolio@spencewenski.com"}>Contact</Link>*/}
            <Link
              href={"mailto:portfolio@spencewenski.com"}
              passHref={true}
              prefetch={false}
            >
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
