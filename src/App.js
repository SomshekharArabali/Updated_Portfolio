"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ThemeContext } from "./ThemeContext"
import Main from "./components/Main"
import NotFound404 from "./components/NotFound404"
import { darkTheme } from "./Theme" // Only import darkTheme

function App() {
  // Theme is now always dark, no need for state or local storage persistence
  const [theme] = useState("dark") 

  // Removed useEffect for persisting theme as it's always dark
  // Removed setTheme from ThemeContext.Provider value

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={darkTheme}> {/* Always use darkTheme */}
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App