"use client"
import { Box, Typography, Grid, Card, CardContent, CardMedia, styled, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import VerifiedIcon from "@mui/icons-material/Verified"

// Component styles
const StyledCertificationsSection = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
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

const CertificationCard = styled(Card)(({ theme }) => ({
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

const CertificationMedia = styled(CardMedia)(({ theme }) => ({
  height: "180px",
  position: "relative",
  overflow: "hidden",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: theme.palette.mode === "dark" ? "rgba(11, 19, 43, 0.7)" : "rgba(248, 249, 250, 0.7)",
  padding: "1rem",
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

const CertificationContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  padding: "1.5rem",
}))

const CertificationDate = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginTop: "0.5rem",
  color: theme.palette.textSecondary.main,
  "& svg": {
    color: theme.palette.mode === "dark" ? "#6FFFE9" : "#5BC0BE",
  },
}))

const Certifications = ({ setCursorVariant }) => {
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

  // Certifications data with correct image paths
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      issueDate: "July 14, 2025",
      image: "/images/AWS.jpg",
      issuer: "Amazon Web Services",
    },
    {
      id: 2,
      title: "Microsoft Certified: Azure Fundamentals",
      issueDate: "February 23, 2025",
      image: "/images/Azure.jpg",
      issuer: "Microsoft",
    },
    {
      id: 3,
      title: "Oracle Certified Foundations Associate",
      issueDate: "February 22, 2025",
      image: "/images/Oracle.jpg",
      issuer: "Oracle",
    },
  ]

  return (
    <StyledCertificationsSection id="Certifications">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle variant="h2" color="textMain.main">
            Certifications
          </SectionTitle>
        </motion.div>

        <Grid container spacing={4}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={cert.id}>
              <motion.div
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
              >
                <CertificationCard>
                  <CertificationMedia
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    image={cert.image}
                    title={cert.title}
                  />
                  <CertificationContent>
                    <Typography variant="h5" component="h3" color="textMain.main" gutterBottom sx={{ fontWeight: 600 }}>
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary.main">
                      Issued by {cert.issuer}
                    </Typography>
                    <CertificationDate variant="body2">
                      <VerifiedIcon fontSize="small" />
                      Issued on: {cert.issueDate}
                    </CertificationDate>
                  </CertificationContent>
                </CertificationCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </StyledCertificationsSection>
  )
}

export default Certifications
