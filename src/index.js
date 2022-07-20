import React from "react";
import ReactDOM from "react-dom";
import Other from "./Other";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store";
import Router from "./Router";

import App from "./App";

const state=Store()

ReactDOM.render(
  <Provider store={state}>
  <BrowserRouter>
  <Link to="/Other" >Go to others or you can make navbar here</Link>
    <Router/>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
