import styled from "styled-components";

interface BackgroundProps {
  image_path: string;
}

export const Background = styled.div<BackgroundProps>`
  height: 100%;
  background-image: url(${(props) => props.image_path});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  color: white;
  font-size: 50pt;
`;
