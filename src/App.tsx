import * as React from "react";

import { Header } from "./Organisms/Header";
import { Timer } from "./Templates/Timer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Timer />
    </React.Fragment>
  );
};

export default App;
