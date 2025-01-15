import { ReactElement } from "react";
import { useTheme } from "@mui/material";

export interface ICircleWrapperProps {
  children: ReactElement;
  size?: string;
}
export const CircleWrapper = (props: ICircleWrapperProps) => {
  const { children, size } = props;
  const theme = useTheme();

  return (
    <div
      style={{
        width: size ?? "280px",
        height: size ?? "280px",
        padding: "24px",
        borderRadius: "50%",
        backgroundColor: `${theme.palette.secondary.main}0D`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "71.43%",
          height: "71.43%",
          padding: "24px",
          borderRadius: "50%",
          backgroundColor: `${theme.palette.secondary.main}1A`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
