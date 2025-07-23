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
} from "@mui/material"
import { motion } from "framer-motion"
import GitHubIcon from "@mui/icons-material/GitHub"
import LaunchIcon from "@mui/icons-material/Launch"

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
  backgroundColor: theme.palette.mode === "dark" ? "rgba(28, 37, 65, 0.8)" : "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: theme.palette.mode === "dark" ? "0 10px 30px rgba(0, 0, 0, 0.3)" : "0 10px 30px rgba(91, 192, 190, 0.1)",
  transition: "all 0.3s ease",
}))

const ProjectMedia = styled(CardMedia)(({ theme }) => ({
  height: "200px",
  position: "relative",
  overflow: "hidden",
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(to bottom, rgba(11, 19, 43, 0.3), rgba(11, 19, 43, 0.6))"
        : "linear-gradient(to bottom, rgba(91, 192, 190, 0.3), rgba(91, 192, 190, 0.6))",
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
  backgroundColor: theme.palette.mode === "dark" ? "rgba(111, 255, 233, 0.1)" : "rgba(91, 192, 190, 0.1)",
  color: theme.palette.textSecondary.main,
  fontWeight: 500,
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "rgba(111, 255, 233, 0.2)" : "rgba(91, 192, 190, 0.2)",
  },
}))

const Projects = ({ setCursorVariant }) => {
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

  // Projects data from user with correct image paths
  const projects = [
    {
      id: "0",
      title: "Online Resume Builder",
      image: "/images/image.png",
      description:
        "A comprehensive online resume builder that allows users to create professional resumes with multiple templates and real-time preview functionality.",
      skills: ["React", "Redux", "CSS", "HTML", "JavaScript"],
      websiteLink: "https://aroma-internship-week-5-online-resume-builder.vercel.app/",
      githubLink: "https://github.com/SomshekharArabali/Aroma-Internship-week-5--online-resume-Builder",
    },
    {
      id: "1",
      title: "CI/CD Migration",
      image: "/images/cicd.png",
      description:
        "Github CI to Azure CI migration project focusing on streamlining deployment processes and improving development workflow efficiency.",
      skills: ["Docker", "Azure", "Cloud", "DevOps", "Python", ".NET"],
      githubLink: "https://github.com/SomshekharArabali/migrating-github-ci-pipelines-to-azure-ci-pipelines",
    },
    {
      id: "2",
      title: "Responsive Starbucks Website",
      image: "/images/starbucks.png",
      description:
        "A responsive Starbucks website clone with modern design, interactive menu, and seamless coffee ordering experience.",
      skills: ["HTML", "CSS", "JavaScript"],
      websiteLink: "https://somshekhararabali.github.io/Responsive-Starbucks-website_/",
      githubLink: "https://github.com/SomshekharArabali/Responsive-Starbucks-website_",
    },
    {
      id: "3",
      title: "Real Estate Website",
      image: "/images/real_estate.png",
      description:
        "The platform provides advanced search filters, enhancing the home-buying and renting process with intuitive user interface and comprehensive property listings.",
      skills: ["React", "Bootstrap", "HTML", "CSS", "JavaScript"],
      websiteLink: "https://aroma-internship-week-4.vercel.app/",
      githubLink: "https://github.com/SomshekharArabali/Aroma-Internship-Week-4-Real-Estate-Website",
    },
  ]

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

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={project.id}>
              <motion.div
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
              >
                <ProjectCard>
                  <ProjectMedia
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    image={project.image}
                    title={project.title}
                  />
                  <ProjectContent>
                    <Typography variant="h5" component="h3" color="textMain.main" gutterBottom sx={{ fontWeight: 600 }}>
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
                          component={motion.div}
                          whileHover={{ scale: 1.1 }}
                        />
                      ))}
                    </Box>
                  </ProjectContent>
                  <ProjectActions>
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
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </StyledProjectsSection>
  )
}

export default Projects
