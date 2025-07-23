"use client"

import { useState, useEffect } from "react" // Fixed: removed unnecessary React import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ThemeContext } from "./ThemeContext"
import Main from "./components/Main"
import NotFound404 from "./components/NotFound404"
import { lightTheme, darkTheme } from "./Theme"

function App() {
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem("theme") || "light"
  })

  // Added useEffect to persist theme changes
  useEffect(() => {
    window.localStorage.setItem("theme", theme)
  }, [theme])

  const muiTheme = theme === "light" ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} /> {/* Fixed: removed exact prop (not needed in v6) */}
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
