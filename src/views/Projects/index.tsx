import React from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import projects from "../../public/js/projects";

const Projects = () => {
  return (
    <>
      <Container padding="100px 50px">
        <Grid>
          {projects.map((values, idx) => (
            <Card
              key={idx}
              title={values.title}
              overview={values.overview}
              technologies={values.technologies}
              image_path={values.image_path}
              link={values.link}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Projects;
