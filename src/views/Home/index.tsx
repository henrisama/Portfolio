import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Center from "../../components/Center";
import Container from "../../components/Container";
import { Background, Title } from "./style";

const Introduce = () => {
  const { title } = useContext(ThemeContext);

  return (
    <>
      <Background
        image_path={
          title === "light"
            ? "src/public/img/background.png"
            : "src/public/img/background_dark.png"
        }
      >
        <Container
          display="flex"
          justifyContent="start"
          alignItems="center"
          padding="0px 0px 0px 40px"
        >
          <Title>
            Hi, I'm <br /> Pedro Flores
          </Title>
        </Container>
      </Background>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Introduce />
    </>
  );
};

export default Home;
