import { Button, Grid, SvgIcon, Typography } from "@mui/material";
import Link from "next/link";
import GitHubIcon from "@/images/github-mark.svg";
import GitLabIcon from "@/images/gitlab-logo-500.svg";
import SourceHutLogo from "@/images/sourcehut.svg";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";

export default function Summary({}) {
  return (
    <>
      <Grid container marginBottom={2}>
        <Grid item xs={12}>
          <Typography variant={"h2"} align={"center"}>
            Spencer Ferris
          </Typography>
        </Grid>
        <Grid item xs={12} container spacing={2} justifyContent={"center"}>
          <Grid item xs={"auto"}>
            <Link href={"/"} passHref={true} prefetch={false}>
              <Button variant={"contained"} startIcon={<HomeIcon />}>
                Portfolio
              </Button>
            </Link>
          </Grid>
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
              href={"https://git.sr.ht/~spencewenski/"}
              passHref={true}
              prefetch={false}
            >
              <Button
                variant={"contained"}
                startIcon={
                  <SvgIcon component={SourceHutLogo} viewBox={"0 0 500 500"} />
                }
              >
                sourcehut
              </Button>
            </Link>
          </Grid>
          <Grid item xs={"auto"}>
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
