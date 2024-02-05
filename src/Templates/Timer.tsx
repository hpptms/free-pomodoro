import * as React from "react";
import { Box, Button, Container } from "@mui/material";

import { Appname } from "../Molecules/Appname";
import { WorkTimer } from "../Organisms/Worktimer";
import { BreakTimer } from "../Organisms/Breaktimer";
import { useState } from "react";

// type infoProps = React.ComponentProps<typeof Timers>;

// type TimerProps = {
//   parentflg: string;
// } & infoProps;

export const Timer = () => {
  const [parentflg, setParentflg] = useState("");

  const ParentAction = (props: string) => {
    console.log(props);
    if (props === "start") {
      setParentflg("start");
    } else if (props === "reset") {
      setParentflg("reset");
    }
    return;
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Appname />

        <Box sx={{ mt: 1, minWidth: 400 }}>
          <WorkTimer parentAction={parentflg} />
          <BreakTimer parentAction={parentflg} />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => ParentAction("start")}
          >
            STRAT
          </Button>

          <Button
            type="submit"
            color="secondary"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => ParentAction("reset")}
          >
            RESET
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
