import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "@picocss/pico";
import { Provider } from "react-redux";
import { store } from "./Redux";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
