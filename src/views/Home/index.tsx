import React, { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import Center from "../../components/Center";
import Container from "../../components/Container";
import {
  Background,
  BioAbstract,
  BioCard,
  BioDiv,
  BioImage,
  Title,
} from "./style";

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
          height="100%"
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

const Bio = () => {
  const { primary, color } = useContext(ThemeContext);

  useEffect(() => {
    const bioImage = document.getElementById("bioImage") as HTMLDivElement;
    const bioAbstract = document.getElementById(
      "bioAbstract",
    ) as HTMLDivElement;

    const bioAbstractPosition =
      bioAbstract.offsetTop + bioAbstract.offsetHeight;

    window.onscroll = () => {
      if (
        document.documentElement.scrollTop +
          document.documentElement.offsetHeight >=
        bioAbstractPosition
      ) {
        bioImage.style.opacity = "1";
      }

      if (
        document.documentElement.scrollTop +
          document.documentElement.offsetHeight >=
        bioAbstractPosition
      ) {
        bioAbstract.style.opacity = "1";
      }
    };
  });

  return (
    <>
      <Container backgroundColor={primary} padding="40px 0px 40px 0px">
        <Center>
          <BioDiv>
            <BioCard>
              <Center>
                <BioImage id="bioImage" />
              </Center>
            </BioCard>
            <BioCard>
              <Center>
                <BioAbstract id="bioAbstract">
                  I'm 21 years old and I study Computer Science at Mato Grosso
                  do Sul Federal University. I intend to do a master's degree
                  focused on artificial intelligence and possibly a doctorate.
                  I'm passionate about science and I'm always updating myself
                  not to fall behind. I spend a lot of my time learning and the
                  spare time for leisure. My goal is very clear: to use my
                  skills to help people as much as I can.
                </BioAbstract>
              </Center>
            </BioCard>
          </BioDiv>
        </Center>
      </Container>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Introduce />
      <Bio />
    </>
  );
};

export default Home;
