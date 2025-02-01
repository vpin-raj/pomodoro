import { ProgressCard } from "./ProgressCard";
import { Box, Typography } from "@mui/material";
import { Scheduler } from "../const/Scheduler";

export interface ITimerProps {
  scheduleId: number;
}

export const Timer = (props: ITimerProps) => {
  const { scheduleId } = props;

  const selectedScheduler = Scheduler.schedules?.find(
    (x) => x.id === scheduleId
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography sx={{ marginBottom: "24px" }}>
        {selectedScheduler?.title}
      </Typography>
      <ProgressCard scheduleId={scheduleId} />
    </Box>
  );
};
