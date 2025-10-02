"use client"

import { useState, useEffect } from "react"
import { useTheme, styled } from "@mui/material"
import { motion } from "framer-motion"
import "animate.css"

// Component styles
const StyledLoaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  position: "fixed",
  backgroundColor: theme.palette.background.default, // Use dark theme default background
  zIndex: 9999,
}))

const LogoContainer = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
})

const LogoText = styled(motion.h1)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  marginTop: "1rem",
  background: "linear-gradient(to right, #6FFFE9, #5BC0BE)", // Always use dark theme gradient
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}))

const Loader = () => {
  const [hasLoaded, setHasLoaded] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true)
    }, 2400)
  }, [])

  // Logo animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  }

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <StyledLoaderContainer
      as={motion.div}
      initial={{ opacity: 1 }}
      animate={hasLoaded ? { opacity: 0 } : { opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ pointerEvents: hasLoaded ? "none" : "auto" }}
    >
      <LogoContainer variants={containerVariants} initial="hidden" animate="visible" exit="exit">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 64 64"
          variants={logoVariants}
        >
          <defs>
            <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              {/* Always use dark theme colors */}
              <stop offset="0%" stopColor="#6FFFE9" />
              <stop offset="100%" stopColor="#5BC0BE" />
            </linearGradient>
          </defs>
          <path
            fill="url(#loaderGradient)"
            d="M32,57.5C17.939,57.5,6.5,46.061,6.5,32S17.939,6.5,32,6.5S57.5,17.939,57.5,32 S46.061,57.5,32,57.5z M32,11.5c-11.304,0-20.5,9.196-20.5,20.5S20.696,52.5,32,52.5S52.5,43.304,52.5,32S43.304,11.5,32,11.5z"
          />
          <path
            fill="url(#loaderGradient)"
            d="M32,58C17.663,58,6,46.336,6,32S17.663,6,32,6s26,11.664,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"
          />
          <path
            fill="url(#loaderGradient)"
            d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,12 c-11.028,0-20,8.972-20,20s8.972,20,20,20s20-8.972,20-20S43.028,12,32,12z"
          />
          <motion.path
            fill="url(#loaderGradient)"
            d="M42.592,26.843l-4.476,0.594c0,0,0.677-5.704-6.775-5.704c-3.791,0-5.23,2.281-5.23,4.003 c0,2.103,1.939,3.096,7.995,4.399c6.055,1.304,9.004,3.564,9.004,7.556s-2.92,7.936-10.792,7.936c-7.109,0-10.27-3.12-11.428-8.974 c2.475-0.346,4.66-0.665,4.66-0.665s-0.786,6.45,6.74,6.45c3.423,0,6.504-0.995,6.504-4.241c0-3.246-3.134-3.885-6.978-4.577 s-9.873-2.049-9.873-7.823c0-5.199,5.581-7.424,9.346-7.424C40,18.372,42.592,22.947,42.592,26.843z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.svg>
        <LogoText variants={textVariants}>Portfolio</LogoText>
      </LogoContainer>
    </StyledLoaderContainer>
  )
}

export default Loader