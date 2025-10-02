"use client"

import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../ThemeContext"
import navbarData from "../content/navbar.json"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import {
  Button,
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  Box,
  List,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
  Slide,
  styled,
} from "@mui/material"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"

// Component Styles
const StyledAppBarContainer = styled("div")(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  placeSelf: "center",
  justifyContent: "center",
  maxWidth: "1200px",
  width: "90vw !important",
  [theme.breakpoints.down("sm")]: {
    width: "100vw !important",
  },
}))

const StyledAppBar = styled(AppBar)(({ theme, isScrolled }) => ({
  transition: "all 0.4s cubic-bezier(0.645,0.045,0.355,1), background-color 0ms !important",
  transitionDelay: "0.1s",
  boxShadow: isScrolled ? "0 10px 30px -10px rgba(0, 0, 0, 0.3) !important" : "none !important",
  backdropFilter: isScrolled ? "blur(10px)" : "none",
  backgroundColor: isScrolled
    ? `${theme.palette.background.default}CC !important` // Use dark theme default background
    : theme.palette.background.default + " !important",
  padding: isScrolled ? "0.5rem 5rem 0.5rem 5rem" : "2rem 5rem 2rem 5rem",
  [theme.breakpoints.down("sm")]: {
    padding: isScrolled ? "0.5rem 2rem 0.5rem 2rem" : "1rem 2rem 1rem 2rem",
  },
}))

const StyledAppBarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  position: "relative",
  "& p": {
    color: theme.palette.textMain.main + " !important",
    transform: "none",
    transition: "transform 150ms ease-in-out 0s !important",
    cursor: "pointer",
    fontSize: "1.2rem",
    padding: "0.5rem",
    "&:hover": {
      color: theme.palette.textSecondary.main + " !important",
      transform: "translateY(-2px)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: "0",
      height: "2px",
      bottom: "0",
      left: "50%",
      backgroundColor: theme.palette.textSecondary.main,
      transition: "all 0.3s ease",
    },
    "&:hover::after": {
      width: "100%",
      left: "0",
    },
  },
}))

const StyledAppBarButton = styled(Button)(({ theme }) => ({
  padding: "10px 8px",
  color: theme.palette.textMain.main + " !important",
  transform: "none",
  transition: "transform 150ms ease-in-out 0s !important",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.textSecondary.main + " !important",
    transform: "translateY(-2px)",
  },
}))

const StyledAppBarDrawerLink = styled(Link)(({ theme }) => ({
  "& p": {
    color: theme.palette.textMain.main + " !important",
    cursor: "pointer",
    fontSize: "1.75rem",
    padding: "0",
    "&:hover": {
      color: theme.palette.textSecondary.main + " !important",
    },
  },
}))

const StyledResumeLink = styled(motion.a)(({ theme }) => ({
  cursor: "pointer",
  textDecoration: "none",
  "& p": {
    borderRadius: "8px !important",
    padding: "0.25rem 0.5rem",
    fontSize: "1.2rem",
    background: theme.palette.gradients.primary,
    color: "#FFFFFF",
    transition: "all 0.3s ease !important",
    boxShadow: "0 4px 20px rgba(91, 192, 190, 0.15)",
    "&:hover": {
      boxShadow: "0 6px 25px rgba(91, 192, 190, 0.25)",
    },
  },
}))

const StyledDrawerIcon = styled(MenuIcon)(({ theme }) => ({
  color: theme.palette.textMain.main,
  fontSize: "2rem !important",
  zIndex: "3 !important",
}))

const StyledDrawerCloseIcon = styled(CloseIcon)(({ theme }) => ({
  position: "fixed",
  top: "32px",
  right: "32px",
  color: theme.palette.textMain.main,
  fontSize: "2rem !important",
  zIndex: "3 !important",
}))

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& div.MuiPaper-root": {
    background: "transparent",
    backdropFilter: "blur(10px)",
    height: "100vh !important",
    boxShadow: "none !important",
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.textMain.main,
    zIndex: "2 !important",
  },
}))

const StyledDrawerList = styled(List)(({ theme }) => ({
  display: "flex",
}))

const Logo = styled(motion.div)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& svg": {
    width: "100px", /* Increased width */
    height: "100px", /* Increased height */
  },
}))

const Navbar = () => {
  const { theme } = useContext(ThemeContext) // Removed setTheme
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const MuiTheme = useTheme()
  const collapse = useMediaQuery(MuiTheme.breakpoints.down("sm"))

  // Disable animations on appbar after they have animated once
  useEffect(() => {
    setTimeout(() => {
      setHasAnimated(true)
    }, 1000)
  }, [])

  // Capture window scroll height for changing navbar styles
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY
      if (scrollY > 60) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleScroll) // Fixed: changed mousemove to scroll
    }
  }, [])

  // Removed useEffect for persisting theme as it's always dark

  // Hide the AppBar when scrolling down
  const trigger = useScrollTrigger({
    target: window,
  })

  const toggleDrawer = (isOpen) => (event) => {
    event.preventDefault()
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }

    setIsOpen(isOpen)
  }

  // Animation variants
  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
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
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const drawer = (
    <>
      <Button
        onClick={toggleDrawer(true)}
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <StyledDrawerIcon />
      </Button>

      <StyledDrawer
        anchor={"top"}
        variant="temporary"
        transitionDuration={500}
        disableScrollLock={true}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <Button
          onClick={toggleDrawer(false)}
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <StyledDrawerCloseIcon />
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            gap: 4,
          }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StyledDrawerList>
            <StyledResumeLink
              href="https://drive.google.com/file/d/1Clpyq8oSYrGLjZBfuagXyJwZdnURKH28/view"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Typography
                sx={{
                  padding: "0.5rem 1rem !important",
                  fontSize: "1.75rem !important",
                }}
              >
                Resume
              </Typography>
            </StyledResumeLink>
          </StyledDrawerList>

          <AnimatePresence>
            {navbarData.map((data, index) => (
              <StyledDrawerList key={data.id}>
                <StyledAppBarDrawerLink
                  onClick={toggleDrawer(false)}
                  to={data.name}
                  smooth={true}
                  duration={1000}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Typography>{data.name}</Typography>
                </StyledAppBarDrawerLink>
              </StyledDrawerList>
            ))}
          </AnimatePresence>
        </Box>
      </StyledDrawer>
    </>
  )

  const navbar = (
    <>
      {/* Removed theme toggle button */}

      {navbarData.map((data, index) => (
        <motion.div
          key={data.id}
          custom={index}
          initial={!hasAnimated ? "hidden" : false}
          animate={!hasAnimated ? "visible" : false}
          variants={navItemVariants}
        >
          <StyledAppBarLink href={`#${data.name}`} to={data.name} smooth={true} duration={1000}>
            <Typography>{data.name}</Typography>
          </StyledAppBarLink>
        </motion.div>
      ))}

      <motion.div
        style={{ paddingLeft: "4px" }}
        initial={!hasAnimated ? { y: -20, opacity: 0 } : false}
        animate={!hasAnimated ? { y: 0, opacity: 1 } : false}
        transition={{ delay: navbarData.length * 0.1 + 0.2, duration: 0.5 }}
      >
        <StyledResumeLink
          href="https://drive.google.com/file/d/1Clpyq8oSYrGLjZBfuagXyJwZdnURKH28/view"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Typography>Resume</Typography>
        </StyledResumeLink>
      </motion.div>
    </>
  )

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <StyledAppBar position="fixed" isScrolled={isScrolled}>
        <StyledAppBarContainer>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Logo variants={logoVariants} initial="hidden" animate="visible" whileHover="hover">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
                <defs>
                  <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    {/* Always use dark theme colors */}
                    <stop offset="0%" stopColor="#6FFFE9" />
                    <stop offset="100%" stopColor="#5BC0BE" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#navLogoGradient)"
                  d="M32,57.5C17.939,57.5,6.5,46.061,6.5,32S17.939,6.5,32,6.5S57.5,17.939,57.5,32 S46.061,57.5,32,57.5z M32,11.5c-11.304,0-20.5,9.196-20.5,20.5S20.696,52.5,32,52.5S52.5,43.304,52.5,32S43.304,11.5,32,11.5z"
                ></path>
                <path
                  fill="url(#navLogoGradient)"
                  d="M32,58C17.663,58,6,46.336,6,32S17.663,6,32,6s26,11.664,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"
                ></path>
                <path
                  fill="url(#navLogoGradient)"
                  d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,12 c-11.028,0-20,8.972-20,20s8.972,20,20,20s20-8.972,20-20S43.028,12,32,12z"
                ></path>
                <path
                  fill="url(#navLogoGradient)"
                  d="M42.592,26.843l-4.476,0.594c0,0,0.677-5.704-6.775-5.704c-3.791,0-5.23,2.281-5.23,4.003 c0,2.103,1.939,3.096,7.995,4.399c6.055,1.304,9.004,3.564,9.004,7.556s-2.92,7.936-10.792,7.936c-7.109,0-10.27-3.12-11.428-8.974 c2.475-0.346,4.66-0.665,4.66-0.665s-0.786,6.45,6.74,6.45c3.423,0,6.504-0.995,6.504-4.241c0-3.246-3.134-3.885-6.978-4.577 s-9.873-2.049-9.873-7.823c0-5.199,5.581-7.424,9.346-7.424C40,18.372,42.592,22.947,42.592,26.843z"
                ></path>
              </svg>
            </Logo>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>{collapse ? drawer : navbar}</Box>
          </Toolbar>
        </StyledAppBarContainer>
      </StyledAppBar>
    </Slide>
  )
}

export default Navbar