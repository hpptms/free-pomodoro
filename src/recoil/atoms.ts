import { atom } from "recoil";

export const workTimerState = atom({
  key: "workTimerState",
  default: {
    minutes: 0,
    seconds: 0,
    isRunning: false,
  },
});

export const breakTimerState = atom({
  key: "breakTimerState",
  default: {
    minutes: 0,
    seconds: 0,
    isRunning: false,
  },
});

export const inputworkTimer = atom({
    key: "inputworkTimer",
    default: {
      minutes: 0,
      seconds: 0,
      isRunning: false,
    },
  });
  
export const inputbreakTimer = atom({
    key: "inputbreakTimer",
    default: {
      minutes: 0,
      seconds: 0,
      isRunning: false,
    },
});

export const streakcount = atom({
  key: "streakcount",
  default: {
    count: 0,
  },
});

export const darkmode = atom({
  key: "darkmode",
  default: {
    darkmode: false,
  },
});