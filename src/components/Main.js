"use client"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Container, useMediaQuery, styled, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import profileImg from "../assets/profile.png"
import {
  Navbar,
  Hero,
  About,
  Experience,
  Certifications,
  Hobbies,
  Projects,
  Footer,
  SideAnchorLinks,
} from "./"

const StyledMain = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  overflow: "hidden",
  position: "relative",
  minHeight: "100vh",
}))

const StyledContainer = styled(Container)({
  maxWidth: "1600px",
  position: "relative",
  zIndex: 1,
})

const BackgroundGradient = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  top: "20%",
  right: "15%",
  width: "30vw",
  height: "30vw",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(111,255,233,0.1) 0%, rgba(91,192,190,0.05) 50%, rgba(0,0,0,0) 70%)",
  filter: "blur(40px)",
  zIndex: 0,
}))

const BackgroundGradient2 = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  bottom: "30%",
  left: "10%",
  width: "25vw",
  height: "25vw",
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(58,80,107,0.1) 0%, rgba(83,115,154,0.05) 50%, rgba(0,0,0,0) 70%)",
  filter: "blur(40px)",
  zIndex: 0,
}))

const CursorFollower = styled(motion.div)(({ theme }) => ({
  position: "fixed",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 9999,
  mixBlendMode: "difference",
  backgroundColor: "#6FFFE9",
  opacity: 0.5,
}))

const Main = () => {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"))
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => window.removeEventListener("mousemove", mouseMove)
  }, [])

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
      window.history.replaceState({}, document.title)
    }
  }, [location])

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      transition: { type: "spring", mass: 0.6 },
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
      transition: { type: "spring", mass: 0.6 },
    },
  }

  return (
    <StyledMain
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setCursorVariant("default")}
    >
      <CursorFollower
        variants={variants}
        animate={cursorVariant}
        style={{ display: isMediumScreen ? "block" : "none" }}
      />
      <BackgroundGradient initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} />
      <BackgroundGradient2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />

      <Navbar setCursorVariant={setCursorVariant} />

      <StyledContainer>
        <Hero img={profileImg} setCursorVariant={setCursorVariant} />
        <About setCursorVariant={setCursorVariant} />
        <Experience setCursorVariant={setCursorVariant} />
        <Certifications setCursorVariant={setCursorVariant} />
        {/* ⬇️ moved Hobbies below Projects */}
        <Projects setCursorVariant={setCursorVariant} />
        <Hobbies setCursorVariant={setCursorVariant} />
      </StyledContainer>

      <Footer setCursorVariant={setCursorVariant} />
      <SideAnchorLinks setCursorVariant={setCursorVariant} />
    </StyledMain>
  )
}

export default Main
