import * as React from "react";
import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { streakcount } from "../recoil/atoms";

export const Appname = () => {
  const { count: streakCount } = useRecoilValue(streakcount);

  return (
    <Typography component="h1" variant="h4">
      ストリーク: {streakCount}
    </Typography>
  );
};
