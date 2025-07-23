import { createTheme } from "@mui/material"

export const lightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Style for the scrollbar
        "*::-webkit-scrollbar": {
          width: "0.4em",
          height: "0.4em",
          backgroundColor: "#FFFFFF",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#5BC0BE",
          borderRadius: "10px",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#3E9F9D",
        },
        "*": {
          boxSizing: "border-box", // Changed from unset to border-box for better responsiveness
        },
        // Add smooth scrolling to the entire page
        html: {
          fontSize: "16px",
          scrollBehavior: "smooth",
        },
        // Improve text rendering
        body: {
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false, // Enable ripple for more modern feel
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FEFFFF",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(91, 192, 190, 0.1)",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 20px rgba(91, 192, 190, 0.15)",
          },
        },
      },
    },
    // Added responsive container component
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "16px",
          paddingRight: "16px",
          "@media (min-width: 600px)": {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
        },
      },
    },
    // Add card hover effects
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
    // Added responsive typography variants
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
    },
    button: {
      textTransform: "none", // More modern look without all caps
    },
  },
  breakpoints: {
    values: {
      xs: 450,
      sm: 960,
      md: 1048,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "light", // Added mode for proper theme switching
    primary: {
      main: "#5BC0BE",
    },
    secondary: {
      main: "#3E9F9D",
    },
    background: {
      default: "#FFFFFF", // Fixed: changed from main to default
      paper: "#F8F9FA",
    },
    // Custom palette colors (properly extended)
    backgroundSecondary: {
      main: "#5BC0BE",
    },
    buttonHover: {
      main: "#3E9F9D",
    },
    textMain: {
      main: "#0B132B",
    },
    textSecondary: {
      main: "#53739A",
    },
    text: {
      primary: "#0B132B",
      secondary: "#53739A",
    },
    // Add gradient colors for modern look
    gradients: {
      primary: "linear-gradient(45deg, #5BC0BE 30%, #3E9F9D 90%)",
      secondary: "linear-gradient(45deg, #0B132B 30%, #1C2541 90%)",
    },
  },
})

export const darkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Style for the scrollbar
        "*::-webkit-scrollbar": {
          width: "0.4em",
          height: "0.4em",
          backgroundColor: "#0B132B",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#3A506B",
          borderRadius: "10px",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#53739A",
        },
        "*": {
          boxSizing: "border-box", // Changed from unset to border-box
        },
        // Add smooth scrolling to the entire page
        html: {
          fontSize: "16px",
          scrollBehavior: "smooth",
        },
        // Improve text rendering
        body: {
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false, // Enable ripple for more modern feel
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FEFFFF",
          transition: "all 0.3s ease", // Added smooth transitions
          "&:hover": {
            backgroundColor: "rgba(58, 80, 107, 0.2)",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 20px rgba(58, 80, 107, 0.25)",
          },
        },
      },
    },
    // Added responsive container component
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "16px",
          paddingRight: "16px",
          "@media (min-width: 600px)": {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
        },
      },
    },
    // Add card hover effects
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
    // Added responsive typography variants
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
    },
    button: {
      textTransform: "none", // More modern look without all caps
    },
  },
  breakpoints: {
    values: {
      xs: 450,
      sm: 960,
      md: 1048,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "dark", // Added mode for proper theme switching
    primary: {
      main: "#3A506B",
    },
    secondary: {
      main: "#53739A",
    },
    background: {
      default: "#0B132B", // Fixed: changed from main to default
      paper: "#1a2332",
    },
    // Custom palette colors (properly extended)
    backgroundSecondary: {
      main: "#3A506B",
    },
    buttonHover: {
      main: "#53739A",
    },
    textMain: {
      main: "#FEFFFF",
    },
    textSecondary: {
      main: "#6FFFE9",
    },
    text: {
      primary: "#FEFFFF",
      secondary: "#6FFFE9",
    },
    // Add gradient colors for modern look
    gradients: {
      primary: "linear-gradient(45deg, #3A506B 30%, #53739A 90%)",
      secondary: "linear-gradient(45deg, #0B132B 30%, #1C2541 90%)",
      accent: "linear-gradient(45deg, #6FFFE9 30%, #5BC0BE 90%)",
    },
  },
})
