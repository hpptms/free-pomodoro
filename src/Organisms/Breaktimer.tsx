import React, { useEffect } from "react";
import { Typography, TextField } from "@mui/material";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { timerStateSelector } from "../recoil/timerStateSelector";
import {
  breakTimerState,
  workTimerState,
  inputworkTimer,
  inputbreakTimer,
} from "../recoil/atoms";

interface TimersProps {
  parentAction: string;
}

export const BreakTimer: React.FC<TimersProps> = (props) => {
  const { workTimer } = useRecoilValue(timerStateSelector);
  const [currentBreakTimer, setBreakTimer] = useRecoilState(breakTimerState);
  const setWorkTimer = useSetRecoilState(workTimerState);
  const inputWorkTimer = useRecoilValue(inputworkTimer);
  const [inputBreakTimer, setInputBreakTimer] = useRecoilState(inputbreakTimer);

  const switchTimer = () => {
    setWorkTimer(inputWorkTimer);
    setBreakTimer(inputBreakTimer);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (currentBreakTimer.isRunning) {
      interval = setInterval(() => {
        if (
          currentBreakTimer.minutes === 0 &&
          currentBreakTimer.seconds === 0
        ) {
          clearInterval(interval);
          setBreakTimer({
            minutes: 0,
            seconds: 0,
            isRunning: false,
          });

          //   BreakTimer終了後、WorkTimerを開始
          switchTimer();
        } else {
          if (currentBreakTimer.seconds === 0) {
            setBreakTimer((prev) => ({
              ...prev,
              minutes: Math.max(0, prev.minutes - 1),
              seconds: 59,
            }));
          } else {
            setBreakTimer((prev) => ({
              ...prev,
              seconds: prev.seconds - 1,
            }));
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [
    currentBreakTimer.isRunning,
    currentBreakTimer.minutes,
    currentBreakTimer.seconds,
    setBreakTimer,
    setWorkTimer,
    workTimer,
    switchTimer,
  ]);

  useEffect(() => {
    if (props.parentAction === "start") {
      startTimer();
    } else if (props.parentAction === "reset") {
      resetTimer();
    }
  }, [props.parentAction, inputBreakTimer]);

  const startTimer = () => {
    if (
      !currentBreakTimer.isRunning &&
      (currentBreakTimer.minutes > 0 || currentBreakTimer.seconds > 0)
    ) {
      setBreakTimer((prev) => ({ ...prev, isRunning: true }));
      setInputBreakTimer({
        minutes: currentBreakTimer.minutes,
        seconds: currentBreakTimer.seconds,
        isRunning: true,
      });
    }
  };

  const resetTimer = () => {
    setBreakTimer({
      minutes: 0,
      seconds: 0,
      isRunning: false,
    });
  };

  const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setBreakTimer((prev) => ({
      ...prev,
      minutes: isNaN(value) ? 0 : Math.min(99, Math.max(0, value)),
    }));
  };

  const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setBreakTimer((prev) => ({
      ...prev,
      seconds: isNaN(value) ? 0 : Math.min(59, Math.max(0, value)),
    }));
  };

  return (
    <React.Fragment>
      <TextField
        label="Set Break Minutes"
        type="number"
        value={currentBreakTimer.minutes}
        onChange={handleMinutesChange}
        inputProps={{ max: 99, min: 0 }}
        disabled={currentBreakTimer.isRunning}
        sx={{ width: "50%" }}
      />
      <TextField
        label="Set Break Seconds"
        type="number"
        value={currentBreakTimer.seconds}
        onChange={handleSecondsChange}
        inputProps={{ max: 59, min: 0 }}
        disabled={currentBreakTimer.isRunning}
        sx={{ width: "50%" }}
      />

      <Typography variant="h4">
        休憩時間: {String(currentBreakTimer.minutes).padStart(2, "0")}:
        {String(currentBreakTimer.seconds).padStart(2, "0")}
      </Typography>
    </React.Fragment>
  );
};
