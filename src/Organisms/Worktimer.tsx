import React, { useEffect } from "react";
import { Typography, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { workTimerState, inputworkTimer } from "../recoil/atoms";

interface TimersProps {
  parentAction: string;
}

export const WorkTimer: React.FC<TimersProps> = (props) => {
  const [currentWorkTimer, setWorkTimer] = useRecoilState(workTimerState);
  const [inputWorkTimer, setInputWorkTimer] = useRecoilState(inputworkTimer);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (currentWorkTimer.isRunning) {
      interval = setInterval(() => {
        if (currentWorkTimer.minutes === 0 && currentWorkTimer.seconds === 0) {
          clearInterval(interval);
          setWorkTimer({
            minutes: 0,
            seconds: 0,
            isRunning: false,
          });
        } else {
          if (currentWorkTimer.seconds === 0) {
            setWorkTimer((prev) => ({
              ...prev,
              minutes: Math.max(0, prev.minutes - 1),
              seconds: 59,
            }));
          } else {
            setWorkTimer((prev) => ({
              ...prev,
              seconds: prev.seconds - 1,
            }));
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [
    currentWorkTimer.isRunning,
    currentWorkTimer.minutes,
    currentWorkTimer.seconds,
    setWorkTimer,
  ]);

  useEffect(() => {
    if (props.parentAction === "start") {
      startTimer();
    } else if (props.parentAction === "reset") {
      resetTimer();
    }
  }, [props.parentAction, inputWorkTimer]);

  const startTimer = () => {
    if (
      !currentWorkTimer.isRunning &&
      (currentWorkTimer.minutes > 0 || currentWorkTimer.seconds > 0)
    ) {
      setWorkTimer((prev) => ({ ...prev, isRunning: true }));
      setInputWorkTimer({
        minutes: currentWorkTimer.minutes,
        seconds: currentWorkTimer.seconds,
        isRunning: true,
      });
    }
  };

  const resetTimer = () => {
    setWorkTimer({
      minutes: 0,
      seconds: 0,
      isRunning: false,
    });
  };

  const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setWorkTimer((prev) => ({
      ...prev,
      minutes: isNaN(value) ? 0 : Math.min(99, Math.max(0, value)),
    }));
  };

  const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setWorkTimer((prev) => ({
      ...prev,
      seconds: isNaN(value) ? 0 : Math.min(59, Math.max(0, value)),
    }));
  };

  return (
    <React.Fragment>
      <TextField
        label="Set Work Minutes"
        type="number"
        value={currentWorkTimer.minutes}
        onChange={handleMinutesChange}
        inputProps={{ max: 99, min: 0 }}
        disabled={currentWorkTimer.isRunning}
        sx={{ width: "50%" }}
      />
      <TextField
        label="Set Work Seconds"
        type="number"
        value={currentWorkTimer.seconds}
        onChange={handleSecondsChange}
        inputProps={{ max: 59, min: 0 }}
        disabled={currentWorkTimer.isRunning}
        sx={{ width: "50%" }}
      />

      <Typography variant="h4">
        作業時間: {String(currentWorkTimer.minutes).padStart(2, "0")}:
        {String(currentWorkTimer.seconds).padStart(2, "0")}
      </Typography>
    </React.Fragment>
  );
};
