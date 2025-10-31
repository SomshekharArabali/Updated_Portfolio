"use client"
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  styled,
  useTheme,
  Tabs,
  Tab,
  useMediaQuery,
} from "@mui/material"
import { motion } from "framer-motion"
import GitHubIcon from "@mui/icons-material/GitHub"
import LaunchIcon from "@mui/icons-material/Launch"
import projectsData from "../../content/projects.json"
import { useState } from "react"

const TabPanelContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  minHeight: "800px",
}));

// Component styles
const StyledProjectsSection = styled(Box)(({ theme }) => ({
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

const ProjectCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(28, 37, 65, 0.8)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
  },
}))

const ProjectMedia = styled(CardMedia)(({ theme }) => ({
  height: "200px",
  position: "relative",
  overflow: "hidden",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(11, 19, 43, 0.7)",
  padding: "1rem",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to bottom, rgba(11, 19, 43, 0.3), rgba(11, 19, 43, 0.6))",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover::before": {
    opacity: 1,
  },
}))

const ProjectContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  padding: "1.5rem",
}))

const ProjectActions = styled(CardActions)(({ theme }) => ({
  padding: "1rem 1.5rem",
  justifyContent: "flex-end",
}))

const TechChip = styled(Chip)(({ theme }) => ({
  margin: "0.25rem",
  backgroundColor: "rgba(111, 255, 233, 0.1)",
  color: theme.palette.textSecondary.main,
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "rgba(111, 255, 233, 0.2)",
  },
}))

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: "2rem",
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.textSecondary.main,
  },
}))

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.textMain.main,
  opacity: 0.7,
  "&.Mui-selected": {
    color: theme.palette.textSecondary.main,
    opacity: 1,
  },
  "&:hover": {
    color: theme.palette.textSecondary.main,
    backgroundColor: "rgba(111, 255, 233, 0.05)",
  },
}))

const Projects = ({ setCursorVariant }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [selectedCategory, setSelectedCategory] = useState(0)

  const categories = ["All", "Cloud Solutions", "Full Stack Development", "Java Development"]

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue)
  }

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 0) {
      return true
    }
    return project.category === categories[selectedCategory]
  })

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

  return (
    <StyledProjectsSection id="Projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle variant="h2" color="textMain.main">
            Things I've Built
          </SectionTitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <StyledTabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            centered={!isMobile}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons="auto"
            aria-label="project categories tabs"
          >
            {categories.map((category, index) => (
              <StyledTab key={category} label={category} />
            ))}
          </StyledTabs>
        </motion.div>

        <TabPanelContainer>
          <Grid container spacing={4} sx={{ p: 3 }}>
            {filteredProjects.map((project, projectIndex) => (
              <Grid item xs={12} sm={6} md={6} key={project.id}>
                <div
                  onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
                >
                  <ProjectCard>
                    <ProjectMedia
                      image={project.image}
                      title={project.title}
                    />
                    <ProjectContent>
                      <Typography
                        variant="h5"
                        component="h3"
                        color="textMain.main"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary.main" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
                        {project.skills.map((tech) => (
                          <TechChip
                            key={tech}
                            label={tech}
                            size="small"
                          />
                        ))}
                      </Box>
                    </ProjectContent>
                    <ProjectActions>
                      {project.category !== "Cloud Solutions" && project.githubLink && (
                        <Button
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: theme.palette.textMain.main,
                            "&:hover": {
                              color: theme.palette.textSecondary.main,
                            },
                          }}
                        >
                          Code
                        </Button>
                      )}
                      {project.websiteLink && (
                        <Button
                          size="small"
                          startIcon={<LaunchIcon />}
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: theme.palette.textMain.main,
                            "&:hover": {
                              color: theme.palette.textSecondary.main,
                            },
                          }}
                        >
                          Demo
                        </Button>
                      )}
                    </ProjectActions>
                  </ProjectCard>
                </div>
              </Grid>
            ))}
          </Grid>
        </TabPanelContainer>
      </motion.div>
    </StyledProjectsSection>
  )
}

export default Projects