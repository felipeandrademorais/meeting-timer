import React from "react";
import Timer from "./pages/Timer";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Timer} />
    </BrowserRouter>
  );
}

export default App;
