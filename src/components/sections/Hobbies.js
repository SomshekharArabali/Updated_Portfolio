import React from "react";
import {
  useTheme,
  Typography,
  Grid,
  styled,
  useMediaQuery,
} from "@mui/material";
import {
  StyledDivider,
  StyledGenericContainer,
  StyledGenericRoot,
  StyledGenericSubText,
  StyledGenericTitle,
} from "./Styles";
import hobbies from "../../content/hobbies.json";
import { motion } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import { TennisSvgPath, RubiksCubePath, RocketLeaguePath } from "../SvgHelper";
import "animate.css";

//Component styles
const StyledHobbiesGrid = styled(Grid)({
  padding: "2rem 0rem 2rem 0rem",
  justifyContent: "center",
  animation: "fadeInUp",
  animationDuration: "1.5s",
});
const StyledHobbiesGridTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(26px, 2vw, 30px) !important",
  color: theme.palette.textMain.main,
  textAlign: "center",
  marginTop: "1rem !important",
}));
const StyledHobbiesGridSubText = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(16px, 1.5vw, 18px) !important",
  color: theme.palette.textSecondary.main,
  textAlign: "center",
}));
const StyledHobbiesGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column !important",
  alignItems: "center",
  padding: "4rem 4rem 4rem 4rem !important",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 4rem 2rem 4rem !important",
  },
  textAlign: "center",
  color: theme.palette.textMain.main,
  minWidth: "33%",
  flexGrow: "1",
}));

//End component styles

const pathVariants = (animationDuration) => ({
  hidden: {
    opactiy: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: animationDuration,
      ease: "easeIn",
    },
  },
});

const Hobbies = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("md"));
  const paths = [TennisSvgPath, RubiksCubePath, RocketLeaguePath];

  const [hobbiesContainer, hobbiesContainerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Scroll.Element name="Hobbies">
      <StyledGenericRoot ref={hobbiesContainer}>
        <StyledGenericContainer>
          <div
            style={
              hobbiesContainerInView
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
            className={
              hobbiesContainerInView
                ? "animate__animated animate__fadeInUp"
                : ""
            }
          >
            <StyledGenericTitle component="h1">
              Hobbies
              <StyledDivider />
            </StyledGenericTitle>
            <StyledGenericSubText component="h1">
              Aside from making applications, these are the things I that enjoy
              to do for fun! Under each of them I have included my favorite
              achievement.
            </StyledGenericSubText>
          </div>

          <StyledHobbiesGrid container spacing={1}>
            {hobbies.map((hobby) => (
              <InView key={hobby.id} threshold={0.8} triggerOnce={true}>
                {({ ref, inView }) => (
                  <StyledHobbiesGridItem item xs={12} sm={4} ref={ref}>
                    <div
                      style={
                        inView
                          ? { visibility: "visible" }
                          : { visibility: "hidden" }
                      }
                      className={
                        inView ? "animate__animated animate__fadeInUp" : ""
                      }
                    >
                      <motion.svg
                        viewBox={hobby.viewBox}
                        width={sm ? hobby.smallWidth : hobby.largeWidth}
                        height={sm ? hobby.smallHeight : hobby.largeHeight}
                        initial="hidden"
                        animate={inView ? "visible" : ""}
                      >
                        <motion.path
                          d={paths[hobby.id]}
                          fill="none"
                          transform={hobby.transform}
                          variants={pathVariants(hobby.animationDuration)}
                          stroke={theme.palette.textMain.main}
                          strokeWidth={hobby.strokeWidth}
                        ></motion.path>
                      </motion.svg>
                      <StyledHobbiesGridTitle>
                        {hobby.name}
                      </StyledHobbiesGridTitle>
                      <StyledHobbiesGridSubText>
                        {hobby.description}
                      </StyledHobbiesGridSubText>
                    </div>
                  </StyledHobbiesGridItem>
                )}
              </InView>
            ))}
          </StyledHobbiesGrid>
        </StyledGenericContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  );
};

export default Hobbies;
