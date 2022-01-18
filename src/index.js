import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Other from "./Other";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/other" element={<Other />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
