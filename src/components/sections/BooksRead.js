"use client"
import { Box, Typography, Grid, Card, CardContent, CardMedia, styled, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import booksData from "../../content/books.json"

// Component styles
const StyledBooksReadSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "5rem 0",
  position: "relative",
  paddingTop: theme.spacing(8), // Add padding to account for fixed Navbar
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(10), // Adjust for larger screens if Navbar height changes
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(12), // Further adjustment for even larger screens
  },
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: "relative",
  marginBottom: "1rem",
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
  maxWidth: "800px",
  margin: "0 auto 4rem auto",
  textAlign: "center",
}))

const BookCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(28, 37, 65, 0.8)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  transition: "all 0.3s ease",
  minHeight: "450px", // Set a minimum height for consistent card size
}))

const BookMedia = styled(CardMedia)(({ theme }) => ({
  height: "250px",
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

const BookContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}))

const BookQuote = styled(Typography)(({ theme }) => ({
  borderLeft: `3px solid ${theme.palette.textSecondary.main}`,
  paddingLeft: "1rem",
  fontStyle: "italic",
  color: theme.palette.textSecondary.main,
  marginTop: "1rem",
}))

const BooksRead = ({ setCursorVariant }) => {
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
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
    },
  }

  return (
    <StyledBooksReadSection id="BooksRead">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants} style={{ textAlign: "center" }}>
          <SectionTitle variant="h2" color="textMain.main">
            What I've read
          </SectionTitle>
        </motion.div>

        <motion.div variants={itemVariants} style={{ textAlign: "center" }}>
          <SectionSubtitle variant="body1" color="textMain.main" sx={{ fontSize: "1.1rem" }}>
            Books that inspire, challenge, and enrich my mind.
          </SectionSubtitle>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {booksData.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <motion.div
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
              >
                <BookCard>
                  <BookMedia
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    image={book.image}
                    title={book.title}
                  />
                  <BookContent>
                    <Box>
                      <Typography variant="h5" component="h3" color="textMain.main" gutterBottom sx={{ fontWeight: 600 }}>
                        {book.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary.main">
                        {book.author}
                      </Typography>
                    </Box>
                    <BookQuote variant="body2">
                      {book.quote}
                    </BookQuote>
                  </BookContent>
                </BookCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </StyledBooksReadSection>
  )
}

export default BooksRead