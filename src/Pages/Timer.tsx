import * as React from "react";
import { Box, Container } from "@mui/material";

import { Appname } from "../Molecules/Appname";
import { WorkTimer } from "../Organisms/Worktimer";
import { BreakTimer } from "../Organisms/Breaktimer";
import { TimerButton } from "../Atoms/TimerButton";
import { useState } from "react";

export const Timer = () => {
  const [parentflg, setParentflg] = useState("");

  const ParentAction = (props: string) => {
    console.log(props);
    setParentflg(props);
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
        <Appname />

        <Box sx={{ m: 1, minWidth: 400 }}>
          <Box sx={{ p: 2 }}>
            <WorkTimer parentAction={parentflg} />
            <BreakTimer parentAction={parentflg} />

            <TimerButton
              action="start"
              color="primary"
              onClick={() => ParentAction("start")}
            />
            <TimerButton
              action="stop"
              color="success"
              onClick={() => ParentAction("stop")}
            />
            <TimerButton
              action="reset"
              color="secondary"
              onClick={() => ParentAction("reset")}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
