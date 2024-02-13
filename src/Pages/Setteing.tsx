import * as React from "react";
import { Box, Container, Typography, Switch } from "@mui/material";
import { useRecoilState } from "recoil";
import { darkmode } from "../recoil/atoms";

export const Setteing = () => {
  const [Darkmode, setDarkmode] = useRecoilState(darkmode);

  const handleDarkModeToggle = () => {
    setDarkmode((prevDarkMode) => ({ darkmode: !prevDarkMode.darkmode }));
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          m: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ m: 1, minWidth: 400 }}>
          <Box sx={{ p: 2 }}>
            <Box>
              <Typography>
                ダークモード
                <Switch onChange={handleDarkModeToggle} />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
