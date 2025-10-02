"use client"

import { useState } from "react"
import { Box, Typography, Tabs, Tab, styled, useTheme } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"

// Component styles
const StyledExperienceSection = styled(Box)(({ theme }) => ({
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

const TabsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}))

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid rgba(255, 255, 255, 0.1)`, // Always use dark theme value
  minWidth: "200px",
  "& .MuiTabs-indicator": {
    left: 0,
    right: "auto",
    width: "3px",
    backgroundColor: theme.palette.textSecondary.main,
  },
  [theme.breakpoints.down("md")]: {
    borderRight: "none",
    borderBottom: `1px solid rgba(255, 255, 255, 0.1)`, // Always use dark theme value
    minWidth: "auto",
    "& .MuiTabs-indicator": {
      left: "auto",
      right: "auto",
      width: "auto",
      height: "3px",
    },
  },
}))

const StyledTab = styled(Tab)(({ theme }) => ({
  alignItems: "flex-start",
  textAlign: "left",
  padding: "1rem 2rem",
  color: theme.palette.textMain.main,
  opacity: 0.7,
  transition: "all 0.3s ease",
  "&.Mui-selected": {
    color: theme.palette.textSecondary.main,
    opacity: 1,
  },
  "&:hover": {
    color: theme.palette.textSecondary.main,
    backgroundColor: "rgba(111, 255, 233, 0.05)", // Always use dark theme value
  },
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    textAlign: "center",
    padding: "1rem",
  },
}))

const TabContent = styled(Box)(({ theme }) => ({
  padding: "0 2rem",
  flex: 1,
  [theme.breakpoints.down("md")]: {
    padding: "2rem 0",
  },
}))

const JobTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  "& .company": {
    color: theme.palette.textSecondary.main,
    marginLeft: "0.5rem",
  },
}))

const BulletPoint = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: "1rem",
  "&::before": {
    content: '"▹"',
    color: theme.palette.textSecondary.main,
    marginRight: "1rem",
  },
}))

const TechStack = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  marginTop: "1rem",
}))

const TechChip = styled(Box)(({ theme }) => ({
  padding: "0.25rem 0.75rem",
  borderRadius: "12px",
  backgroundColor: "rgba(111, 255, 233, 0.1)", // Always use dark theme value
  color: theme.palette.textSecondary.main,
  fontSize: "0.8rem",
  fontWeight: 500,
}))

const Experience = ({ setCursorVariant }) => {
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const mdBreakpoint = theme.breakpoints.down("md")

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

  const tabContentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
  }

  // Experience data
  const experiences = [
    {
  company: "COEPTECH Virtual Math Lab, Pune",
  title: "Intern Programmer",
  date: "22 March 2025 - 22 July 2025",
  responsibilities: [
    "Contributed to the NMEICT Virtual Lab initiative by the Ministry of Education as part of a national-level collaboration with 11 premier institutes",
    "Worked on simulation development and debugging for math lab visualizations and interactive learning modules",
    "Developed and managed HTML/CSS/JS code embedded in Excel sheets using Java for seamless offline simulation deployment",
    "Used a vibe coding approach to keep the code modular, clean, and highly readable for future contributors",
    "Collaborated with academic and technical mentors to align features with pedagogical goals"
  ],
  technologies: ["Java", "HTML", "CSS", "JavaScript", "Apache POI", "Excel", "Vibe Coding"]
},
    
   
    {
  company: "Aroma Brand Solutions",
  title: "Software Development Intern",
  date: "January 2020 – July 2020",
  location: "Pune, Maharashtra",
  responsibilities: [
    "Contributed to the development of multiple web applications including a resume builder and a real estate listing platform using React and Bootstrap",
    "Focused on responsive design, optimizing user experience across devices and screen sizes",
    "Collaborated with senior developers through code reviews and feedback cycles to improve code quality and architecture",
    "Delivered production-ready features within deadlines while adhering to modern development standards and best practices"
  ],
  technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Git"]
}

  ]

  return (
    <StyledExperienceSection id="Experience">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle variant="h2" color="textMain.main">
            Where I've Worked
          </SectionTitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <TabsContainer>
            <StyledTabs
              orientation={mdBreakpoint ? "horizontal" : "vertical"}
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Work experience tabs"
              sx={{ mb: { xs: 2, md: 0 } }}
            >
              {experiences.map((exp, index) => (
                <StyledTab
                  key={exp.company}
                  label={exp.company}
                  id={`vertical-tab-${index}`}
                  aria-controls={`vertical-tabpanel-${index}`}
                  component={motion.div}
                  whileHover={{ x: mdBreakpoint ? 0 : 5 }}
                  onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
                />
              ))}
            </StyledTabs>

            <TabContent>
              <AnimatePresence mode="wait">
                {experiences.map(
                  (exp, index) =>
                    value === index && (
                      <motion.div
                        key={exp.company}
                        variants={tabContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <JobTitle variant="h5" color="textMain.main" sx={{ mb: 1, fontWeight: 600 }}>
                          {exp.title} <span className="company">@ {exp.company}</span>
                        </JobTitle>

                        <Typography variant="subtitle2" color="textSecondary.main" sx={{ mb: 3 }}>
                          {exp.date}
                        </Typography>

                        {exp.responsibilities.map((responsibility, i) => (
                          <BulletPoint key={i}>
                            <Typography variant="body1" color="textMain.main">
                              {responsibility}
                            </Typography>
                          </BulletPoint>
                        ))}

                        <TechStack>
                          {exp.technologies.map((tech) => (
                            <TechChip key={tech}>{tech}</TechChip>
                          ))}
                        </TechStack>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </TabContent>
          </TabsContainer>
        </motion.div>
      </motion.div>
    </StyledExperienceSection>
  )
}

export default Experience