import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect } from "react";
import { Scheduler } from "../const/Scheduler";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTheme } from "@mui/material";
import { CircleWrapper } from "./common/CircleWrapper";
import PauseIcon from "@mui/icons-material/Pause";
import { FormatSeconds } from "../util/Conversion";
import { PlayAlarm } from "../util/Alarm";

export interface IProgressCardProps {
  scheduleId: number;
}

export const ProgressCard = React.memo((props: IProgressCardProps) => {
  const { scheduleId } = props;
  const [progress, setProgress] = React.useState(0);
  const [progressSec, setProgressSec] = React.useState(0);
  const [isActivity, setIsActivity] = React.useState(false);
  const [isPause, setIsPause] = React.useState(true);
  const [time, setTime] = React.useState(0);
  const theme = useTheme();
  let percentage = 0;
  let totalSeconds = 0;
  const selectedScheduler = Scheduler.schedules?.find(
    (x) => x.id === scheduleId
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPause && progressSec > 0) {
        setProgressSec((prev) => prev - 1);
      }

      //Execute after completing the activity
      if (!isPause && progressSec <= 0 && isActivity) {
        setIsActivity(false);
        PlayAlarm();
      }

      //Execute after completing the interval
      if (!isPause && progressSec <= 0 && !isActivity) {
        setIsActivity(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progressSec, progress, isPause, isActivity]);

  useEffect(() => {
    // Calculate Percentage after updating the count
    percentage = (progressSec / (time * 60)) * 100;
    setProgress(percentage);
  }, [progressSec, time]);

  useEffect(() => {
    // Set activity when start
    setIsActivity(true);
  }, []);

  useEffect(() => {
    if (isActivity) {
      setTime(selectedScheduler?.activity ?? 0);
      totalSeconds = (selectedScheduler?.activity ?? 0) * 60;
    } else {
      setTime(selectedScheduler?.interval ?? 0);
      totalSeconds = (selectedScheduler?.interval ?? 0) * 60;
    }
    setProgressSec(totalSeconds);
    setProgress(100);
  }, [selectedScheduler?.activity, selectedScheduler?.interval, isActivity]);

  const handleProgressClick = useCallback(() => {
    setIsPause((Prev) => !Prev);
  }, []);

  return (
    <Box sx={{ height: "500px", display: "flex", justifyContent: "center" }}>
      <CircleWrapper>
        <Box
          onClick={handleProgressClick}
          sx={{ position: "relative", display: "inline-flex" }}
        >
          <CircularProgressbar
            value={progress}
            // text={`${progress}%`}
            text={`${!isPause ? FormatSeconds(progressSec) : ""}`}
            styles={buildStyles({
              trailColor: `${theme.palette.secondary.main}66`,
              pathColor: theme.palette.primary.main,
              textColor: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.main,
            })}
          />
          {isPause && (
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PauseIcon
                sx={{
                  width: "80px",
                  height: "80px",
                  color: `${theme.palette.secondary.main}80`,
                }}
              />
            </Box>
          )}
        </Box>
      </CircleWrapper>
    </Box>
  );
});
