import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeContext } from "./ThemeContext";
import Main from "./components/Main";
import NotFound404 from "./components/NotFound404";
import { lightTheme, darkTheme } from "./Theme";

function App() {
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem("theme") || "light";
  });
  const muiTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline>
          <Router>
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="*" element={<NotFound404 />} />
            </Routes>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
