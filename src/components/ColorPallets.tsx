import React, { useCallback, useState } from "react";
import { ThemeColors } from "../Theme/ThemeColors";
import { Box } from "@mui/material";

export interface IColorPalletsProps {
  setTheme: Function;
}
export const ColorPallets = (props: IColorPalletsProps) => {
  const { setTheme } = props;
  const [pallet, setPallet] = useState(ThemeColors);
  const [themeId, setThemeId] = useState(0);

  const handleOnClick = useCallback(
    (id: number) => {
      setTheme(id);
      setThemeId(id);
    },
    [setTheme]
  );
  return (
    <Box sx={{ display: "flex", gap: "12px" }}>
      {pallet?.themes?.map((x) => (
        <Box
          id={`${x?.id}`}
          key={`${x?.id}`}
          onClick={() => handleOnClick(x?.id)}
          sx={{
            backgroundColor: x.foundationColor,
            width: "24px",
            height: "24px",
          }}
        />
      ))}
    </Box>
  );
};
