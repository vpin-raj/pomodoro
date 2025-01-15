import Grid from "@mui/material/Grid2";
import React, { ReactElement } from "react";
import { ColorPallets } from "../components/ColorPallets";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { CircleWrapper } from "../components/common/CircleWrapper";

export interface ILayoutProps {
  leftContent: ReactElement;
  rightContent: ReactElement;
  setTheme: Function;
}
export const Layout = (props: ILayoutProps) => {
  const { leftContent, rightContent, setTheme } = props;
  return (
    <Grid
      container
      sx={{
        minWidth: { xs: "250px", sm: "769px", md: "1025px" },
        boxSizing: "border-box",
      }}
    >
      <Grid size={4} sx={{ height: "auto" }}>
        <CircleWrapper size="120px">
          <TipsAndUpdatesIcon
            sx={{ color: "primary.main", height: "100px", width: "100px" }}
          />
        </CircleWrapper>
      </Grid>
      <Grid
        size={8}
        sx={{ height: "60px", display: "flex", justifyContent: "flex-end" }}
      >
        <ColorPallets setTheme={setTheme} />
      </Grid>
      <Grid size={2}>{leftContent}</Grid>
      <Grid size={10}>{rightContent}</Grid>
    </Grid>
  );
};
