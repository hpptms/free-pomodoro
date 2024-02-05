import { selector } from "recoil";
import { workTimerState, breakTimerState } from "./atoms";

export const timerStateSelector = selector({
  key: "timerState",
  get: ({ get }) => {
    const workTimer = get(workTimerState);
    const breakTimer = get(breakTimerState);

    return { workTimer, breakTimer };
  },
});
