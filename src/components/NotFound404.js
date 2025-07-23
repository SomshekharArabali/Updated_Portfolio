"use client"

import { useContext } from "react"
import { Container, Typography, Button, Box, useTheme, useMediaQuery } from "@mui/material"
import { Home, ArrowBack } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../ThemeContext"

const NotFound404 = () => {
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)
  const muiTheme = useTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"))

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        color: "text.primary",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 4, md: 8 },
          }}
        >
          <Typography
            variant={isMobile ? "h2" : "h1"}
            component="h1"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
              color: "primary.main",
            }}
          >
            404
          </Typography>

          <Typography variant={isMobile ? "h5" : "h4"} component="h2" gutterBottom sx={{ mb: 2 }}>
            Page Not Found
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            The page you're looking for doesn't exist or has been moved.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              startIcon={<Home />}
              onClick={() => navigate("/")}
              size={isMobile ? "medium" : "large"}
              sx={{
                px: { xs: 3, sm: 4 },
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              Go Home
            </Button>

            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
              size={isMobile ? "medium" : "large"}
              sx={{
                px: { xs: 3, sm: 4 },
                borderColor: "primary.main",
                color: "primary.main",
                "&:hover": {
                  borderColor: "secondary.main",
                  backgroundColor: "rgba(94, 192, 190, 0.1)",
                },
              }}
            >
              Go Back
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NotFound404
