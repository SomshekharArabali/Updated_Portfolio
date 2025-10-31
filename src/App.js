"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ThemeContext } from "./ThemeContext"
import Main from "./components/Main"
import NotFound404 from "./components/NotFound404"
import BooksReadPage from "./pages/BooksReadPage" // Import the new page
import { darkTheme } from "./Theme" // Only import darkTheme

function App() {
  const [theme] = useState("dark") 

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/books" element={<BooksReadPage />} /> {/* New route for BooksReadPage */}
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App