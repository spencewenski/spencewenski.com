import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import LaunchIcon from "@mui/icons-material/Launch";
import { ReactNode, useEffect, useRef, useState } from "react";
import TechnologiesList from "@/components/TechnologiesList";
import Image from "next/image";

export type ProjectInfo = {
  title: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  summary: Array<ReactNode>;
  technologies: Array<string>;
  website?: string;
  source?: string;
};

export type Input = {
  projectInfo: ProjectInfo;
};

export default function ProjectDetails({ projectInfo }: Input) {
  const imageWrapperRef = useRef<HTMLElement>(null);
  const [imageHeight, setImageHeight] = useState<number>(0);

  // Todo: adjust image size when screen size changes
  useEffect(() => {
    if (
      !!imageWrapperRef?.current &&
      !!projectInfo.imageUrl &&
      !!projectInfo.imageWidth &&
      !!projectInfo.imageHeight
    ) {
      setImageHeight(
        imageWrapperRef.current.offsetWidth *
          (projectInfo.imageHeight / projectInfo.imageWidth)
      );
    }
  }, [projectInfo.imageHeight, projectInfo.imageUrl, projectInfo.imageWidth]);

  return (
    <Grid container spacing={2}>
      {!!projectInfo.imageUrl && (
        <Grid item xs={12} md={6}>
          <Box height={imageHeight} position={"relative"} ref={imageWrapperRef}>
            <Image
              src={projectInfo.imageUrl}
              alt={`Project preview image for ${projectInfo.title}`}
              style={{ objectFit: "contain" }}
              fill
            />
          </Box>
          {/*Todo: Use `next/image` instead -- I couldn't get it to scale well, so using `img` for now.*/}
          {/*<img*/}
          {/*  src={projectInfo.imageUrl}*/}
          {/*  alt={`Project preview image for ${projectInfo.title}`}*/}
          {/*  width={"100%"}*/}
          {/*  height={"auto"}*/}
          {/*/>*/}
        </Grid>
      )}
      <Grid item xs={12} md={!!projectInfo.imageUrl ? 6 : 12}>
        <Typography variant={"h6"} gutterBottom>
          {projectInfo.title}
        </Typography>
        {projectInfo.summary.map((summary, index) => (
          <Typography gutterBottom key={index}>
            {summary}
          </Typography>
        ))}
        <TechnologiesList technologies={projectInfo.technologies} />
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
