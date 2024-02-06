import React, { useState } from "react";
import { Button } from "@mui/material";

interface TimerButtonProps {
  action: string;
  color: "primary" | "success" | "secondary";
  onClick: () => void; // 追加
}

export const TimerButton: React.FC<TimerButtonProps> = ({
  action,
  color,
  onClick,
}) => {
  const [parentflg, setParentflg] = useState("");

  const ParentAction = (props: string) => {
    console.log(props);
    if (props === "start") {
      setParentflg("start");
    } else if (props === "stop") {
      setParentflg("stop");
    } else if (props === "reset") {
      setParentflg("reset");
    }
    return;
  };

  return (
    <Button
      type="submit"
      color={color}
      fullWidth
      variant="contained"
      sx={{ mt: 0, mb: 2 }}
      onClick={() => {
        ParentAction(action);
        onClick(); // 追加
      }}
    >
      {action}
    </Button>
  );
};
