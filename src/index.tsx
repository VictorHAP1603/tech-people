import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";

// styles
import { GlobalStyles } from "./styles/globalStyles";
import { light } from "./styles/themes/light";

ReactDOM.render(
  <ThemeProvider theme={light}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById("root")
);
