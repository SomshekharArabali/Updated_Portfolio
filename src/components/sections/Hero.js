"use client"
import { Box, Typography, Button, styled, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"

// Component styles
const StyledHeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  paddingTop: "80px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "60px",
  },
}))

const HeroContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "800px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}))

const HeroImage = styled(motion.img)(({ theme }) => ({
  position: "absolute",
  right: "5%",
  bottom: "15%",
  width: "400px",
  height: "auto",
  borderRadius: "50%",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
  zIndex: 1,
  [theme.breakpoints.down("lg")]: {
    width: "300px",
    right: "2%",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}))

const GradientText = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(to right, #6FFFE9, #5BC0BE)", // Always use dark theme gradient
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 700,
}))

const ScrollDownButton = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  bottom: "40px",
  left: "50%",
  transform: "translateX(-50%)",
  cursor: "pointer",
  color: theme.palette.textMain.main,
}))

const Hero = ({ img, setCursorVariant }) => {
  const theme = useTheme()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  }

  const scrollButtonVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    },
  }

  return (
    <StyledHeroSection id="Home">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <HeroContent>
          <motion.div variants={itemVariants}>
            <Typography variant="h6" color="textSecondary.main" sx={{ mb: 2, fontWeight: 500 }}>
              Hi, my name is
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GradientText variant="h1" sx={{ mb: 1, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
              Somshekhar Arabali
            </GradientText>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              color="textSecondary.main"
              sx={{ mb: 3, fontSize: { xs: "1.8rem", md: "2.5rem" } }}
            >
              I build things for the web.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              color="textMain.main"
              sx={{ mb: 4, maxWidth: "600px", fontSize: { xs: "1rem", md: "1.1rem" } }}
            >
              I'm a software developer specializing in building exceptional digital experiences. Currently, I'm focused
              on building accessible, human-centered products.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link to="Projects" smooth={true} duration={1000}>
              <Button
                variant="contained"
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
                sx={{
                  background: theme.palette.gradients.primary,
                  px: 4,
                  py: 1.5,
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: 500,
                  boxShadow: "0 4px 20px rgba(91, 192, 190, 0.2)",
                  "&:hover": {
                    background: theme.palette.gradients.primary,
                    boxShadow: "0 6px 25px rgba(91, 192, 190, 0.3)",
                  },
                }}
              >
                Check out my work
              </Button>
            </Link>
          </motion.div>
        </HeroContent>
      </motion.div>

      {img && (
        <HeroImage
          src={img}
          alt="Profile"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <ScrollDownButton
        variants={scrollButtonVariants}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="About" smooth={true} duration={1000}>
          <ArrowDownwardIcon fontSize="large" />
        </Link>
      </ScrollDownButton>
    </StyledHeroSection>
  )
}

export default Hero