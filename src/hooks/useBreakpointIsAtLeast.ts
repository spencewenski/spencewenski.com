import { useMediaQuery, useTheme } from "@mui/material";
import { Breakpoint } from "@mui/system";

export type Props = {
  breakpoint: Breakpoint;
  defaultMatches?: boolean;
};

export default function useBreakpointIsAtLeast({
  breakpoint,
  defaultMatches,
}: Props): boolean {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(breakpoint), {
    defaultMatches: defaultMatches !== undefined ? defaultMatches : false,
  });
}
