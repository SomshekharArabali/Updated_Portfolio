"use client"

import { useState, useEffect } from "react"
import { Container, useMediaQuery, styled, useTheme } from "@mui/material"
import maxAvatar from "../assets/profile.png"
import { motion, AnimatePresence } from "framer-motion"
import {
  Loader,
  Navbar,
  SideAnchorLinks,
  Hero,
  About,
  Certifications,
  Experience,
  Projects,
  Hobbies,
  Footer,
} from "../components"

const StyledMainPage = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  overflow: "hidden",
  position: "relative",
}))

const StyledMainContainer = styled(Container)({
  maxWidth: "1600px",
  position: "relative",
  zIndex: 1,
})

// Background gradient element
const BackgroundGradient = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  top: "20%",
  right: "15%",
  width: "30vw",
  height: "30vw",
  borderRadius: "50%",
  background:
    theme.palette.mode === "dark"
      ? "radial-gradient(circle, rgba(111,255,233,0.1) 0%, rgba(91,192,190,0.05) 50%, rgba(0,0,0,0) 70%)"
      : "radial-gradient(circle, rgba(91,192,190,0.1) 0%, rgba(62,159,157,0.05) 50%, rgba(0,0,0,0) 70%)",
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
  background:
    theme.palette.mode === "dark"
      ? "radial-gradient(circle, rgba(58,80,107,0.1) 0%, rgba(83,115,154,0.05) 50%, rgba(0,0,0,0) 70%)"
      : "radial-gradient(circle, rgba(11,19,43,0.1) 0%, rgba(28,37,65,0.05) 50%, rgba(0,0,0,0) 70%)",
  filter: "blur(40px)",
  zIndex: 0,
}))

// Cursor follower
const CursorFollower = styled(motion.div)(({ theme }) => ({
  position: "fixed",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 9999,
  mixBlendMode: "difference",
  backgroundColor: theme.palette.mode === "dark" ? "#6FFFE9" : "#5BC0BE",
  opacity: 0.5,
}))

const Main = () => {
  const theme = useTheme()
  const showSideAnchor = useMediaQuery(theme.breakpoints.up("lg"))
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"))
  const [isLoading, setIsLoading] = useState(true)
  const [heroImg, setHeroImg] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  // Loader animation before rest of the page gets rendered
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2400)

    const loadImage = async () => {
      const img = new Image()
      img.src = maxAvatar
      await img.decode()
      setHeroImg(maxAvatar)
    }
    loadImage()

    // Mouse follower effect
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  // Cursor variants
  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  }

  // Section animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <>
            <CursorFollower
              variants={variants}
              animate={cursorVariant}
              style={{ display: isMediumScreen ? "block" : "none" }}
            />
            <Navbar />
            <StyledMainPage
              initial="initial"
              animate="animate"
              variants={pageVariants}
              onMouseEnter={() => setCursorVariant("default")}
            >
              <BackgroundGradient initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} />
              <BackgroundGradient2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              {showSideAnchor && <SideAnchorLinks />}
              <StyledMainContainer>
                <Hero img={heroImg} setCursorVariant={setCursorVariant} />
                <About setCursorVariant={setCursorVariant} />
                <Certifications setCursorVariant={setCursorVariant} />
                <Experience setCursorVariant={setCursorVariant} />
                <Projects setCursorVariant={setCursorVariant} />
                <Hobbies setCursorVariant={setCursorVariant} />
                <Footer setCursorVariant={setCursorVariant} />
              </StyledMainContainer>
            </StyledMainPage>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Main
