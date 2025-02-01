import { Box, Typography } from "@mui/material";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";

export interface IScheduleCard {
  id: string;
  title: string;
  isDefault: boolean;
  onClick: () => void;
}

export const ScheduleCard = (props: IScheduleCard) => {
  const { id, title, isDefault, onClick } = props;
  return (
    <Box
      id={id}
      component={"div"}
      sx={{
        height: "40px",
        minWidth: "50px",
        width: "100%",
        display: "flex",
        // padding: "0px 12px",
        alignItems: "center",
        // justifyContent: "flex-end",
        // borderBottom: isDefault ? `1px solid` : "",
        borderColor: "secondary.main",
        gap: "12px",
        boxSizing: "border-box",
      }}
      onClick={onClick}
    >
      <AlarmOnIcon sx={{ color: isDefault ? "secondary.main" : "lightgray" }} />
      <Typography sx={{ color: isDefault ? "secondary.main" : "lightgray" }}>
        {title}
      </Typography>
    </Box>
  );
};
