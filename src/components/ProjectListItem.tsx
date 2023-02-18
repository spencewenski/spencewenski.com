import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

export type ProjectInfo = {
  title: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  summary: string;
  technologies: Array<string>;
  website?: string;
  source?: string;
};

export type Input = {
  projectInfo: ProjectInfo;
  index: number;
};

export default function ProjectListItem({ projectInfo }: Input) {
  return (
    <Card variant={"outlined"} sx={{ backgroundColor: "#f4f4f4" }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              height: "100%",
            }}
            padding={"1em"}
          >
            <CardMedia
              component="img"
              image={projectInfo.imageUrl}
              alt={`Project preview image for ${projectInfo.title}`}
              sx={{ margin: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant={"h4"} gutterBottom>
              {projectInfo.title}
            </Typography>
            <Typography gutterBottom>{projectInfo.summary}</Typography>
            <Grid container spacing={1}>
              {projectInfo.technologies.map((technology) => (
                <Grid key={technology} item xs={"auto"}>
                  <Chip variant={"outlined"} label={technology} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
          {(!!projectInfo.website || !!projectInfo.source) && (
            <CardActions>
              {!!projectInfo.website && (
                <Link href={projectInfo.website} passHref={true}>
                  <Button variant={"contained"}>Website</Button>
                </Link>
              )}
              {!!projectInfo.source && (
                <Link href={projectInfo.source} passHref={true}>
                  <Button variant={"contained"}>Source</Button>
                </Link>
              )}
            </CardActions>
          )}
        </Grid>
      </Grid>
    </Card>
  );
}
