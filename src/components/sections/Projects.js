import { React } from "react";
import { Typography, Container, Grid, styled } from "@mui/material";
import {
  StyledDivider,
  StyledGenericContainer,
  StyledGenericRoot,
  StyledGenericSubText,
  StyledGenericTitle,
} from "./Styles";
import "animate.css";
import { useInView, InView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import projects from "../../content/projects.json";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

//Component styles//
const StyledProjectsContainer = styled(Container)(({ theme }) => ({
  marginTop: "3rem",
  display: "flex",
  flexDirection: "column",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  textAlign: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    width: "85% !important",
  },
  [theme.breakpoints.down("xs")]: {
    width: "90% !important",
  },
}));
const StyledProjectsGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "space-around",
  width: "100%",
  marginLeft: "0 !important",
  marginTop: "0 !important",
  padding: "1rem",
}));
const StyledProjectsGridItem = styled(Grid)(({ theme }) => ({
  position: "relative",
  display: "flex",
  height: "280px",
  marginBottom: "2.5rem",
  borderRadius: "1rem",
  border: `0.25rem solid ${theme.palette.backgroundSecondary.main}70`,
  backgroundColor: `${theme.palette.backgroundSecondary.main}70`,
  paddingTop: "0 !important",
  paddingLeft: "0 !important",
  overflow: "hidden",
  alignItems: "flex-end",
  transform: "none",
  transition: "transform 150ms ease-in-out 0s",
  "&:hover": {
    transform: "scale(1.02)",
    transition: "transform 150ms ease-in-out 0s",
    [theme.breakpoints.up("md")]: {
      "& div": {
        opacity: "1",
        transform: "translateY(-10%)",
        transition:
          "opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s",
      },
    },
    "&::after": {
      opacity: "0.9 !important",
      content: "''",
      position: "absolute",
      inset: "0px",

      background:
        "linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 70%)",
    },
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "500px",
    "&::after": {
      opacity: "0.9 !important",
      content: "''",
      position: "absolute",
      inset: "0px",

      background:
        "linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 70%)",
    },
    "& div": {
      opacity: "1",
    },
  },
  [theme.breakpoints.down("sm")]: {
    height: "260px !important",
  },
}));
const StyledProjectsImg = styled("img")(({ theme }) => ({
  transform: "scale(1.01)",
  height: "100%",
  width: "100%",
  position: "absolute",
  objectFit: "cover",
}));
const StyledProjectsTextField = styled("div")(({ theme }) => ({
  zIndex: "1000 !important",
  transition: "opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s",
  transform: "none",
  opacity: "0",
  padding: "0rem 1rem",
  color: "white",
  textAlign: "left",
  [theme.breakpoints.down("lg")]: {
    transform: "none",
    padding: "1rem 1rem",
  },
}));
const StyledProjectsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem !important",
  fontWeight: "600",
}));
const StyledProjectsSubText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem !important",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem !important",
  },
}));
const StyledProjectsSkillContainer = styled("div")(({ theme }) => ({
  marginTop: "0.5rem",
  display: "flex",
  flexWrap: "wrap",
  rowGap: "0.4rem",
}));
const StyledProjectsSkillText = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem !important",
  background: "white",
  marginRight: "0.5rem",
  padding: "0.1rem 0.4rem",
  borderRadius: "0.5rem",
  color: "black",
  fontWeight: "600",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem !important",
  },
}));
const StyledProjectsOpenLink = styled("a")({
  color: "inherit",
  "& svg": {
    padding: "0",
    minWidth: "0",
    marginTop: "0.5rem",
    marginRight: "0.5rem",
    transform: "none",
    transition: "transform 200ms",
  },
  "&:hover": {
    "& svg": {
      transform: "scale(1.15)",
    },
  },
});
const StyledProjectsGHLink = styled("a")({
  color: "inherit",
  "& svg": {
    padding: "0",
    minWidth: "0",
    marginTop: "0.43rem",
    transform: "scale(0.90)",
    transition: "transform 200ms",
  },
  "&:hover": {
    "& svg": {
      transform: "scale(1.15)",
    },
  },
});

//End component styles

const Projects = () => {
  //triggers for animations
  const [projectsContainer, projectsContainerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Scroll.Element name="Projects">
      <StyledGenericRoot ref={projectsContainer}>
        <StyledGenericContainer
          sx={
            projectsContainerInView
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
          className={
            projectsContainerInView ? "animate__animated animate__fadeInUp" : ""
          }
        >
          <StyledGenericTitle component="h1">
            Projects
            <StyledDivider />
          </StyledGenericTitle>
          <StyledGenericSubText component="h1">
            Here are a few of my favorite projects that I have built over the
            past few years!
          </StyledGenericSubText>
        </StyledGenericContainer>
        <StyledProjectsContainer>
          <StyledProjectsGrid container rowSpacing={6} columnSpacing={12}>
            {projects.map((project) => (
              <InView key={project.id} threshold={0.9} triggerOnce={true}>
                {({ ref, inView }) => (
                  <StyledProjectsGridItem
                    item
                    xs={12}
                    sm={5.5}
                    ref={ref}
                    inView={inView}
                    sx={
                      inView
                        ? {
                            visibility: "visible",
                            animation: "fadeInUp",
                            animationDuration: "1s",
                          }
                        : { visibility: "hidden" }
                    }
                  >
                    <StyledProjectsImg
                      alt={`Image of ${project.title}`}
                      src={project.image}
                      referrerPolicy="no-referrer"
                    />
                    <StyledProjectsTextField>
                      <StyledProjectsTitle>{project.title}</StyledProjectsTitle>
                      <StyledProjectsSubText>
                        {project.description}
                      </StyledProjectsSubText>
                      <StyledProjectsSkillContainer>
                        {project.skills.map((skill, index) => (
                          <StyledProjectsSkillText key={index}>
                            {skill}
                          </StyledProjectsSkillText>
                        ))}
                      </StyledProjectsSkillContainer>
                      {project.websiteLink && (
                        <StyledProjectsOpenLink
                          href={project.websiteLink}
                          target="_blank"
                        >
                          <LaunchIcon />
                        </StyledProjectsOpenLink>
                      )}
                      {project.githubLink && (
                        <StyledProjectsGHLink
                          href={project.githubLink}
                          target="_blank"
                        >
                          <GitHubIcon />
                        </StyledProjectsGHLink>
                      )}
                    </StyledProjectsTextField>
                  </StyledProjectsGridItem>
                )}
              </InView>
            ))}
          </StyledProjectsGrid>
        </StyledProjectsContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  );
};

export default Projects;
