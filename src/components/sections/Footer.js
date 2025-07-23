"use client"
import { Box, Typography, Container, IconButton, styled, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"

// Component styles
const StyledFooter = styled(Box)(({ theme }) => ({
  padding: "4rem 0",
  backgroundColor: theme.palette.background.paper,
  position: "relative",
  overflow: "hidden",
}))

const FooterContent = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  position: "relative",
  zIndex: 1,
}))

const SocialIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  marginTop: "1.5rem",
  marginBottom: "2rem",
}))

const FooterWave = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  overflow: "hidden",
  lineHeight: 0,
  transform: "rotate(180deg)",
  "& svg": {
    position: "relative",
    display: "block",
    width: "calc(100% + 1.3px)",
    height: "150px",
  },
  "& .shape-fill": {
    fill: theme.palette.mode === "dark"
      ? "rgba(58, 80, 107, 0.2)"
      : "rgba(91, 192, 190, 0.2)",
  },
}))

const Footer = ({ setCursorVariant }) => {
  const theme = useTheme()
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  }

  return (
    <StyledFooter id="Contact">
      <FooterWave>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,
            172-41.86,82.39-16.72,168.19-17.73,
            250.45-.39C823.78,31,906.67,72,
            985.66,92.83c70.05,18.48,146.53,26.09,
            214.34,3V0H0V27.35A600.21,600.21,0,0,0,
            321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </FooterWave>

      <FooterContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                background: theme.palette.mode === "dark"
                  ? "linear-gradient(to right, #6FFFE9, #5BC0BE)"
                  : "linear-gradient(to right, #0B132B, #3A506B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get In Touch
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "600px",
                mx: "auto",
                mb: 3,
                color: theme.palette.textMain.main,
              }}
            >
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SocialIcons>
              <IconButton
                component={motion.a}
                href="https://www.linkedin.com/in/somshekhar-arabali-167651259/"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
                sx={{
                  color: theme.palette.textSecondary.main,
                  backgroundColor: theme.palette.mode === "dark"
                    ? "rgba(111, 255, 233, 0.1)"
                    : "rgba(91, 192, 190, 0.1)",
                  "&:hover": {
                    backgroundColor: theme.palette.mode === "dark"
                      ? "rgba(111, 255, 233, 0.2)"
                      : "rgba(91, 192, 190, 0.2)",
                  },
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>

              <IconButton
                component={motion.a}
                href="https://github.com/SomshekharArabali"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
                sx={{
                  color: theme.palette.textSecondary.main,
                  backgroundColor: theme.palette.mode === "dark"
                    ? "rgba(111, 255, 233, 0.1)"
                    : "rgba(91, 192, 190, 0.1)",
                  "&:hover": {
                    backgroundColor: theme.palette.mode === "dark"
                      ? "rgba(111, 255, 233, 0.2)"
                      : "rgba(91, 192, 190, 0.2)",
                  },
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>

              <IconButton
                component={motion.a}
                href="mailto:omie9284@gmail.com"
                variants={iconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
                sx={{
                  color: theme.palette.textSecondary.main,
                  backgroundColor: theme.palette.mode === "dark"
                    ? "rgba(111, 255, 233, 0.1)"
                    : "rgba(91, 192, 190, 0.1)",
                  "&:hover": {
                    backgroundColor: theme.palette.mode === "dark"
                      ? "rgba(111, 255, 233, 0.2)"
                      : "rgba(91, 192, 190, 0.2)",
                  },
                }}
              >
                <EmailIcon fontSize="large" />
              </IconButton>
            </SocialIcons>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.textSecondary.main,
                opacity: 0.8,
              }}
            >
              Designed & Built by Somshekhar Arabali
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: theme.palette.textSecondary.main,
                opacity: 0.6,
              }}
            >
              © {currentYear} All Rights Reserved
            </Typography>
          </motion.div>
        </motion.div>
      </FooterContent>
    </StyledFooter>
  )
}

export default Footer
