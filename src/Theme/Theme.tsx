import { createTheme } from "@mui/material/styles";
import { ThemeColors } from "./ThemeColors";

const getCustomTheme = (themeId: number) => {
  const selectedTheme = ThemeColors.themes.find(
    (theme) => theme.id === themeId
  );

  if (!selectedTheme) {
    console.warn(
      `Theme with id ${themeId} not found. Falling back to default.`
    );
    return createTheme(); // Fallback to default theme
  }

  return createTheme({
    palette: {
      primary: {
        main: selectedTheme.primaryColor,
      },
      secondary: {
        main: selectedTheme.secondaryColor,
      },
      background: {
        default: selectedTheme.backgroundColor,
        paper: selectedTheme.foundationColor,
      },
      text: {
        primary: selectedTheme.foreColor,
      },
    },
  });
};

export default getCustomTheme;
