import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Organisms/Header";
import { Timer } from "./Pages/Timer";
import { Setteing } from "./Pages/Setteing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useRecoilValue } from "recoil";
import { darkmode } from "./recoil/atoms";

const App = () => {
  const Darkmode = useRecoilValue(darkmode);
  let dark;
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  if (Darkmode.darkmode) {
    dark = darkTheme;
  } else {
    dark = lightTheme;
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={dark}>
        <CssBaseline />
        <React.Fragment>
          <Header />
          <Routes>
            <Route path="/" element={<Timer />} />
            <Route path="/Setteing" element={<Setteing />} />
          </Routes>
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
