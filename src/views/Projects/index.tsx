import React from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import projects from "../../public/js/projects";
import { Title } from "./style";

const Projects = () => {
  return (
    <>
      <Container padding="100px 50px">
        {projects.map((values, idx) => (
          <Container key={idx} margin="0px 0px 100px 0px">
            <Title>{values.area}</Title>
            <Grid>
              {values.projects.map((project, id) => {
                return (
                  <Card
                    key={id}
                    title={project.title}
                    overview={project.overview}
                    technologies={project.technologies}
                    image_path={project.image_path}
                    link={project.link}
                  />
                );
              })}
            </Grid>
          </Container>
        ))}
      </Container>
    </>
  );
};

export default Projects;
