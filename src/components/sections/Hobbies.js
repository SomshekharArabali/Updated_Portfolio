"use client"
import { Box, Typography, Grid, Card, CardContent, styled, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import SportsIcon from "@mui/icons-material/Sports"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"

// Component styles
const StyledHobbiesSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "5rem 0",
  position: "relative",
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: "relative",
  marginBottom: "3rem",
  display: "inline-block",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "0",
    width: "60px",
    height: "4px",
    backgroundColor: theme.palette.textSecondary.main,
  },
}))

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: "4rem",
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto 4rem auto",
}))

const HobbyCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "2rem",
  backgroundColor: theme.palette.mode === "dark" ? "rgba(28, 37, 65, 0.8)" : "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  boxShadow: theme.palette.mode === "dark" ? "0 10px 30px rgba(0, 0, 0, 0.3)" : "0 10px 30px rgba(91, 192, 190, 0.1)",
  transition: "all 0.3s ease",
}))

const IconWrapper = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1.5rem",
  background: theme.palette.gradients.primary,
  boxShadow: "0 10px 20px rgba(91, 192, 190, 0.2)",
}))

const Hobbies = ({ setCursorVariant }) => {
  const theme = useTheme()

  // Animation variants
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      boxShadow:
        theme.palette.mode === "dark" ? "0 20px 40px rgba(0, 0, 0, 0.4)" : "0 20px 40px rgba(91, 192, 190, 0.2)",
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: {
        duration: 0.3,
      },
    },
  }

  // Hobbies data based on the screenshot
  const hobbies = [
    {
      id: 1,
      title: "Sports & GYM",
      description: "I'm not a sports personality, but I enjoy sports and hitting the gym.",
      icon: <SportsIcon sx={{ fontSize: "2.5rem", color: "#fff" }} />,
    },
    {
      id: 2,
      title: "Craft & Read",
      description: "I enjoy reading romance dramas, adventure novels, and occasionally self-help books.",
      icon: <MenuBookIcon sx={{ fontSize: "2.5rem", color: "#fff" }} />,
    },
    {
      id: 3,
      title: "Games&Movies",
      description: "Video gaming is the ultimate mix of relaxation, strategy, and escapism.",
      icon: <SportsEsportsIcon sx={{ fontSize: "2.5rem", color: "#fff" }} />,
    },
  ]

  return (
    <StyledHobbiesSection id="Hobbies">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle variant="h2" color="textMain.main">
            Hobbies
          </SectionTitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <SectionSubtitle variant="body1" color="textMain.main" sx={{ fontSize: "1.1rem" }}>
            Aside from exploring tech innovations, these are the things I that enjoy to do for fun!
          </SectionSubtitle>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {hobbies.map((hobby, index) => (
            <Grid item xs={12} sm={6} md={4} key={hobby.id}>
              <motion.div
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
              >
                <HobbyCard>
                  <motion.div variants={iconVariants} whileHover="hover">
                    <IconWrapper>{hobby.icon}</IconWrapper>
                  </motion.div>
                  <CardContent>
                    <Typography variant="h5" component="h3" color="textMain.main" gutterBottom sx={{ fontWeight: 600 }}>
                      {hobby.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary.main">
                      {hobby.description}
                    </Typography>
                  </CardContent>
                </HobbyCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </StyledHobbiesSection>
  )
}

export default Hobbies
