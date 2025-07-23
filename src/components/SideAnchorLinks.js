"use client"
import { emailSvgPath, githubSvgPath, linkedInSvgPath } from "./SvgHelper"
import { styled } from "@mui/material"
import { useTheme } from "@mui/material"
import { motion } from "framer-motion"

// Component Styles
const StyledAnchorLink = styled(motion.a)(({ theme }) => ({
  "& svg": {
    width: "2.2rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: "none",
  },
  "&:hover": {
    "& svg": {
      fill: theme.palette.textSecondary.main + " !important",
    },
  },
  marginBottom: "1.5rem",
}))

const StyledLeftAnchor = styled(motion.div)({
  width: "40px",
  position: "fixed",
  bottom: "16vh",
  left: "50px",
  right: "auto",
  zIndex: "10",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "&::after": {
    content: '""',
    display: "block",
    width: "1px",
    height: "90px",
    margin: "0 auto",
    backgroundColor: "currentColor",
  },
})

const StyledRightAnchor = styled(motion.div)({
  width: "40px",
  position: "fixed",
  bottom: "16vh",
  left: "auto",
  right: "50px",
  zIndex: "10",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "&::after": {
    content: '""',
    display: "block",
    width: "1px",
    height: "90px",
    margin: "0 auto",
    backgroundColor: "currentColor",
  },
})

const SideAnchorLinks = () => {
  const theme = useTheme()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 1,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <>
      <StyledLeftAnchor variants={containerVariants} initial="hidden" animate="visible">
        <StyledAnchorLink
          href="https://www.linkedin.com/in/somshekhar-arabali-167651259/"
          target="_blank"
          aria-label="LinkedIn"
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            fill={theme.palette.textMain.main}
            width="44px"
            height="44px"
            viewBox="-5.5 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn</title>
            <path d={linkedInSvgPath} />
          </svg>
        </StyledAnchorLink>
        <StyledAnchorLink
          href="https://github.com/SomshekharArabali"
          target="_blank"
          aria-label="Github"
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="44px"
            height="44px"
            fillRule="evenodd"
            fill={theme.palette.textMain.main}
          >
            <title>Github</title>
            <path fillRule="evenodd" d={githubSvgPath} />
          </svg>
        </StyledAnchorLink>
        <StyledAnchorLink
          href="mailto:omie9284@gmail.com"
          sx={{ transform: "scale(0.90)" }}
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            fill={theme.palette.textMain.main}
            height="44px"
            width="44px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 75.294 75.294"
            xmlSpace="preserve"
          >
            <title>Email</title>
            <g>
              <path d={emailSvgPath} />
            </g>
          </svg>
        </StyledAnchorLink>
      </StyledLeftAnchor>
    </>
  )
}

export default SideAnchorLinks
