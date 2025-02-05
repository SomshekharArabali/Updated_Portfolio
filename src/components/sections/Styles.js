import { styled, Container, Typography } from "@mui/material";

const isFirefox = /Firefox/i.test(navigator.userAgent);

//Styles used accross components

export const StyledDivider = styled("div")(({ theme }) => ({
  height: "0.4rem",
  width: "2rem",
  borderRadius: "2rem",
  margin: "1rem",
  background: theme.palette.textSecondary.main,
}));

export const StyledGenericRoot = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  justifyContent: "center",
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
}));

export const StyledGenericContainer = styled(Container)({
  display: "flex !important",
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
});

export const StyledGenericTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold !important",
  color: theme.palette.textMain.main,
  fontSize: "clamp(32px, 4vw, 56px) !important",
  textAlign: isFirefox ? "-moz-center" : "-webkit-center",
  animation: "fadeInUp",
  animationDuration: "1s",
}));

export const StyledGenericSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textMain.main,
  fontSize: "clamp(20px, 2vw, 26px) !important",
  textAlign: "center",
  animation: "fadeInUp",
  animationDuration: "1s",
}));
