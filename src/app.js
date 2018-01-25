import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import Home from "./home";

export default () =>
  <Provider store={store}>
    <Home />
  </Provider>;
