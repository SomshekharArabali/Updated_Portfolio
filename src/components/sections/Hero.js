import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, styled } from "@mui/material";
import "animate.css";
import { AbcSharp } from "@mui/icons-material";

//Component styles//
const StyledHeroRoot = styled("section")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.background.main,
  minHeight: "100vh",
}));

const StyledHeroContainer = styled(Container)(({ theme, ismobile }) => ({
  display: "flex !important",
  flex: "1",
  alignItems: "center",
  alignSelf: "center",
  // boxSizing: "unset !important",
  // width: "unset",
  ["@media (max-height: 804px)"]: {
    paddingTop: ismobile ? "0px" : "102px",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "2rem",
  },
}));

const StyledHeroGrid = styled(Grid)(({ ismobile }) => ({
  // alignItems: "center",
  // justifyContent: "space-around",
  // width: "auto",
  // marginBottom: ismobile ? "3.5rem" : "0rem",
}));

const StyledHeroImage = styled("img")(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  width: "450px",
  // borderRadius: "2rem",
  // border: `0.25rem solid ${theme.palette.backgroundSecondary.main}70`,
  // backgroundColor: `${theme.palette.backgroundSecondary.main}70`,
  textAlign: "center",
  margin: "2rem 4rem 2rem 4rem",
  [theme.breakpoints.down("lg")]: {
    width: "220px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "57vw",
  },
}));

const StyledHeroText = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  animation: "fadeIn",
  animationDuration: "2s",
  width: "50%",
  paddingLeft: "0 !important",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    margin: "0",
  },
  margin: "2rem 4rem 2rem 4rem ",
  position: "absolute",
  right: "10px",
  top: "25rem",
}));

const StyledHeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold !important",
  color: theme.palette.textMain.main,
  marginBottom: theme.spacing(0),
  fontSize: "clamp(34px, 4vw, 55px) !important",
  [theme.breakpoints.up("md")]: {
    whiteSpace: "nowrap",
  },
}));

const StyledHeroSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textSecondary.main + " !important",
  fontSize: "clamp(20px, 2vw, 26px) !important",
}));

const ScrollerIcon = styled("div")(({ theme }) => ({
  "@keyframes wheel": {
    to: {
      opacity: 0,
      top: "2.4rem",
    },
  },
  width: "1.5rem",
  height: "3rem",
  borderRadius: "2rem",
  position: "relative",
  marginBottom: "4rem",
  marginTop: "1rem",
  border: "3px solid " + theme.palette.textMain.main + " !important",
  "&::before": {
    content: "''",
    width: "0.3rem",
    height: "0.3rem",
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "50%",
    opacity: "1",
    backgroundColor: theme.palette.textMain.main + " !important",
    WebkitAnimation: "wheel 2s infinite",
    animation: "wheel 1.6s infinite",
  },
}));

//End component style//

const Hero = ({ img }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <StyledHeroRoot>
      <StyledHeroContainer ismobile={isMobile}>
        <StyledHeroGrid ismobile={isMobile} container spacing={0}>
          <Grid item style={{ paddingLeft: "0 !important" }}>
            <StyledHeroImage alt="Image of Somashekhar Arabali" src={img} />
          </Grid>
          <StyledHeroText item>
            <StyledHeroTitle component="h1" variant="h2">
              Somashekhar Arabali
            </StyledHeroTitle>
            <StyledHeroSubText component="h1" variant="h5">
              Software engineer who enjoys creative coding and innovation and has Expertise in CLoud and Web Developement !
            </StyledHeroSubText>
          </StyledHeroText>
        </StyledHeroGrid>
      </StyledHeroContainer>
      {isMobile ? (
        <></>
      ) : (
        <div
          style={{
            marginTop: "2rem",
            animation: "fadeInUp",
            animationDuration: "1s",
          }}
        >
          <ScrollerIcon />
        </div>
      )}
    </StyledHeroRoot>
  );
};

export default Hero;
