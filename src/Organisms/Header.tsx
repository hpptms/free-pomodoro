import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { cyan } from "@mui/material/colors";

const color = cyan[600];

export const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: color }}>
      <Toolbar>
        <Typography variant="h6">ポモドーロっぽいタイマー</Typography>
      </Toolbar>
    </AppBar>
  );
};
