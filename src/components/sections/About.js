"use client"
import { Box, Typography, Grid, Paper, styled, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import CloudIcon from "@mui/icons-material/Cloud"
import CodeIcon from "@mui/icons-material/Code"
import CoffeeIcon from "@mui/icons-material/Coffee"

// Component styles
const StyledAboutSection = styled(Box)(({ theme }) => ({
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

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: "2rem",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: theme.palette.mode === "dark" ? "rgba(58, 80, 107, 0.2)" : "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  boxShadow: theme.palette.mode === "dark" ? "0 10px 30px rgba(0, 0, 0, 0.3)" : "0 10px 30px rgba(91, 192, 190, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: theme.palette.mode === "dark" ? "0 15px 40px rgba(0, 0, 0, 0.4)" : "0 15px 40px rgba(91, 192, 190, 0.2)",
  },
}))

const IconWrapper = styled(Box)(({ theme }) => ({
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1.5rem",
  background: theme.palette.gradients.primary,
  boxShadow: "0 10px 20px rgba(91, 192, 190, 0.2)",
}))

const SkillsList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "0.5rem",
  marginTop: "1.5rem",
}))

const SkillTag = styled(motion.div)(({ theme }) => ({
  padding: "0.5rem 1rem",
  borderRadius: "20px",
  backgroundColor: theme.palette.mode === "dark" ? "rgba(111, 255, 233, 0.1)" : "rgba(91, 192, 190, 0.1)",
  color: theme.palette.textSecondary.main,
  fontSize: "0.9rem",
  fontWeight: 500,
}))

const About = ({ setCursorVariant }) => {
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
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  const tagVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  }

  // Skills data
  const cloudSkills = ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "DevOps", "Microservices"]
  const frontendSkills = ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Material-UI", "Redux"]
  const javaSkills = ["Java", "Spring Boot", "Spring Framework", "Maven", "JUnit", "Hibernate", "REST APIs"]

  return (
    <StyledAboutSection id="About">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle variant="h2" color="textMain.main">
            About Me
          </SectionTitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography variant="body1" color="textMain.main" sx={{ mb: 6, maxWidth: "800px", fontSize: "1.1rem" }}>
            I'm a passionate software developer with expertise in cloud technologies, frontend development, and
            Java-based solutions. My journey in software development started with a curiosity about building scalable
            applications, which evolved into a deep passion for creating robust, cloud-integrated solutions. I enjoy
            solving complex problems and continuously learning new technologies to deliver high-quality software
            solutions.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              custom={0}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
            >
              <SkillCard elevation={3}>
                <IconWrapper>
                  <CloudIcon sx={{ fontSize: "2rem", color: "#fff" }} />
                </IconWrapper>
                <Typography variant="h5" color="textMain.main" sx={{ mb: 2, fontWeight: 600 }}>
                  Cloud-integrated Solutions
                </Typography>
                <Typography variant="body2" color="textSecondary.main" sx={{ mb: 2 }}>
                  I design and implement scalable cloud architectures using modern DevOps practices and containerization
                  technologies.
                </Typography>
                <SkillsList>
                  {cloudSkills.map((skill, index) => (
                    <SkillTag key={skill} custom={index} variants={tagVariants} whileHover="hover">
                      {skill}
                    </SkillTag>
                  ))}
                </SkillsList>
              </SkillCard>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              custom={1}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
            >
              <SkillCard elevation={3}>
                <IconWrapper>
                  <CodeIcon sx={{ fontSize: "2rem", color: "#fff" }} />
                </IconWrapper>
                <Typography variant="h5" color="textMain.main" sx={{ mb: 2, fontWeight: 600 }}>
                  Frontend Development
                </Typography>
                <Typography variant="body2" color="textSecondary.main" sx={{ mb: 2 }}>
                  I build responsive and interactive user interfaces using modern JavaScript frameworks and libraries, ensuring smooth user experiences.
.
                </Typography>
                <SkillsList>
                  {frontendSkills.map((skill, index) => (
                    <SkillTag key={skill} custom={index} variants={tagVariants} whileHover="hover">
                      {skill}
                    </SkillTag>
                  ))}
                </SkillsList>
              </SkillCard>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              custom={2}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
            >
              <SkillCard elevation={3}>
                <IconWrapper>
                  <CoffeeIcon sx={{ fontSize: "2rem", color: "#fff" }} />
                </IconWrapper>
                <Typography variant="h5" color="textMain.main" sx={{ mb: 2, fontWeight: 600 }}>
                  Java Development
                </Typography>
                <Typography variant="body2" color="textSecondary.main" sx={{ mb: 2 }}>
                  I develop robust enterprise applications using Java and Spring ecosystem for scalable backend
                  solutions.
                </Typography>
                <SkillsList>
                  {javaSkills.map((skill, index) => (
                    <SkillTag key={skill} custom={index} variants={tagVariants} whileHover="hover">
                      {skill}
                    </SkillTag>
                  ))}
                </SkillsList>
              </SkillCard>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </StyledAboutSection>
  )
}

export default About
