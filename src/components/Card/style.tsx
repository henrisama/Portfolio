import styled from "styled-components";

interface CardDivProps {
  image_path: string;
}

export const CardDiv = styled.div<CardDivProps>`
  height: 300px;
  width: 500px;
  //padding: 20px;
  margin: 20px 20px;
  border-radius: 10px;

  background-image: url(${(props) => props.image_path});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: start;
  align-items: flex-end;

  /*  transition: all 0.4s linear;
  -webkit-transition: all 0.4s linear;

  :hover {
    -webkit-transform: scale(1.03);
    -moz-transform: scale(1.03);
  } */

  cursor: pointer;

  @media (max-width: 600px) {
    height: 200px;
    width: 350px;
  }

  @media (max-width: 400px) {
    height: 200px;
    width: 300px;
  }
`;

export const CardTitle = styled.h1`
  font-size: 50pt;
`;

export const CardOverview = styled.p`
  padding: 15px 0px;
  font-size: 14pt;
  font-style: italic;
`;

interface CardTechnologiesProps {
  color: string;
}

export const CardTechnologies = styled.p<CardTechnologiesProps>`
  padding: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
`;
