import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Router from "./config/Router";
import Global from "./styles/Global";
import lightTheme from "./styles/theme/light";
import darkTheme from "./styles/theme/dark";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const Main = () => {
  const [theme, setTheme] = useState(lightTheme);

  function toggleTheme() {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} checked={theme === darkTheme} />
        <Router />
      </BrowserRouter>
      <Global />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
