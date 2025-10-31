"use client"

import { useState, useEffect } from "react"
import { Container, useMediaQuery, styled, useTheme, Button, Box } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"
import { BooksRead, Footer } from "../components"
import { useNavigate } from "react-router-dom"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

const StyledBooksReadPage = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  overflow: "hidden",
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}))

const StyledPageContainer = styled(Container)({
  maxWidth: "1600px",
  position: "relative",
  zIndex: 1,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
})

// Background gradient elements (replicated from Main.js for consistency)
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

// Cursor follower (replicated from Main.js for consistency)
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

const BooksReadPage = () => {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"))
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);

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
    <StyledBooksReadPage
      initial="initial"
      animate="animate"
      variants={pageVariants}
      onMouseEnter={() => setCursorVariant("default")}
    >
      <CursorFollower
        variants={variants}
        animate={cursorVariant}
        style={{ display: isMediumScreen ? "block" : "none" }}
      />
      <BackgroundGradient initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} />
      <BackgroundGradient2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      {/* Moved the button Box here, outside StyledPageContainer */}
      <Box sx={{ position: 'absolute', top: theme.spacing(2), left: theme.spacing(2), zIndex: 10 }}>
        <Button
  variant="outlined"
  startIcon={<ArrowBackIcon />}
  onClick={() => navigate('/', { state: { scrollTo: 'Hobbies' } })}
  sx={{
    borderColor: "white",
    color: "white",
    "&:hover": {
      borderColor: "white",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  }}
  component={motion.button}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onMouseEnter={() => setCursorVariant("hover")}
  onMouseLeave={() => setCursorVariant("default")}
>
  Back to Hobbies
</Button>

      </Box>
      <StyledPageContainer>
        <BooksRead setCursorVariant={setCursorVariant} />
      </StyledPageContainer>
      <Footer setCursorVariant={setCursorVariant} />
    </StyledBooksReadPage>
  )
}

export default BooksReadPage