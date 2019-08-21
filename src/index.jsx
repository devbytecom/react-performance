import React from "react";
import { render } from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import App from "./app";

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
