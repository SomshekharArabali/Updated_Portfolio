import { createTheme } from "@mui/material";

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
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FEFFFF",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
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
    background: {
      main: "#FFFFFF",
    },
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
  },
});

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
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FEFFFF",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
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
    background: {
      main: "#0B132B",
    },
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
  },
});
