import { Button, Chip, Grid, Typography } from "@mui/material";
import Link from "next/link";
import LaunchIcon from "@mui/icons-material/Launch";
import { ReactNode } from "react";

export type ProjectInfo = {
  title: string;
  imageUrl?: string;
  summary: Array<ReactNode>;
  technologies: Array<string>;
  website?: string;
  source?: string;
};

export type Input = {
  projectInfo: ProjectInfo;
};

export default function ProjectDetails({ projectInfo }: Input) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        {/*Todo: Use `next/image` instead -- I couldn't get it to scale well, so using `img` for now.*/}
        <img
          src={projectInfo.imageUrl}
          alt={`Project preview image for ${projectInfo.title}`}
          width={"100%"}
          height={"auto"}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant={"h6"} gutterBottom>
          {projectInfo.title}
        </Typography>
        {projectInfo.summary.map((summary, index) => (
          <Typography gutterBottom key={index}>
            {summary}
          </Typography>
        ))}
        <Grid container spacing={1} marginBottom={"1em"}>
          {projectInfo.technologies.map((technology) => (
            <Grid key={technology} item xs={"auto"}>
              <Chip variant={"outlined"} label={technology} />
            </Grid>
          ))}
        </Grid>
        {(!!projectInfo.website || !!projectInfo.source) && (
          <Grid container spacing={1}>
            {!!projectInfo.website && (
              <Grid item xs={"auto"}>
                <Link href={projectInfo.website} passHref={true}>
                  <Button variant={"contained"} endIcon={<LaunchIcon />}>
                    Website
                  </Button>
                </Link>
              </Grid>
            )}
            {!!projectInfo.source && (
              <Grid item xs={"auto"}>
                <Link href={projectInfo.source} passHref={true}>
                  <Button variant={"contained"} endIcon={<LaunchIcon />}>
                    Source
                  </Button>
                </Link>
              </Grid>
            )}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
