import styled from "styled-components";

interface BackgroundProps {
  image_path: string;
}

export const Background = styled.div<BackgroundProps>`
  height: 100%;
  background-image: url(${(props) => props.image_path});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  font-size: 50pt;
  text-shadow: 5px 2px black;
`;

export const BioDiv = styled.div`
  width: 80%;
  height: 400px;
  display: flex;
  background-color: ${(props) => props.theme.secundary};
  border-radius: 20px;

  @media (max-width: 800px) {
    padding: 40px 0px 40px 0px;
    display: block;
    height: fit-content;
  }
`;

export const BioCard = styled.div`
  height: 100%;
  width: 50%;

  @media (max-width: 800px) {
    height: fit-content;
    width: 100%;
  }
`;

export const BioImage = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 100%;
  background-image: url("src/public/img/profile.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1s linear;

  @media (max-width: 800px) {
    height: 175px;
    width: 175px;
    margin-bottom: 20px;
  }
`;

export const BioAbstract = styled.p`
  padding: 50px;
  text-align: center;
  opacity: 0;
  transition: opacity 1s linear;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;

interface WordCloudProps {
  image_path: string;
}
export const WordCloud = styled.div<WordCloudProps>`
  background-image: url(${(props) => props.image_path});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  width: 500px;

  @media (max-width: 800px) {
    height: 300px;
    width: 300px;
  }
`;
