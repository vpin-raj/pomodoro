import React, { useCallback, useState } from "react";
import { Scheduler } from "../const/Scheduler";
import { ScheduleCard } from "./ScheduleCard";
import { Box, Typography } from "@mui/material";

export interface ISchedulesProps {
  setSchedulerId: Function;
}
export const Schedules = (props: ISchedulesProps) => {
  const { setSchedulerId } = props;
  const [schedule, setSchedule] = useState(Scheduler);

  const handleScheduleCardClick = useCallback((id: number) => {
    setSchedule((prev) => ({ ...prev, defaultScheduleId: id }));
    setSchedulerId(id);
  }, []);

  return (
    <Box sx={{ paddingTop: "48px" }}>
      <Typography
        sx={{
          fontSize: "20px",
          color: "primary.main",
          textAlign: "left",
          marginBottom: "12px",
        }}
      >
        SCHEDULES
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {schedule?.schedules?.map((x, idx) => (
          <ScheduleCard
            id={`schedule-${idx}`}
            key={`schedule-${idx}`}
            title={x?.title}
            isDefault={idx + 1 === schedule?.defaultScheduleId}
            onClick={() => handleScheduleCardClick(x.id)}
          />
        ))}
      </Box>
    </Box>
  );
};
