import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";

import { cyan } from "@mui/material/colors";

const color = cyan[600];

export const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: color }}>
      <Toolbar>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            ポモドーロっぽいタイマー
          </Link>
        </Typography>
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          sx={{ marginLeft: "auto" }}
        >
          <Button style={{ backgroundColor: color }}>
            <Link
              to="/Setteing"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              設定
            </Link>
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};
