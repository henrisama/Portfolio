import Container from "../Container";
import { CardDiv, CardTitle, CardOverview, CardTechnologies } from "./style";

interface Props {
  title: string;
  overview: string;
  technologies: string[];
  image_path: string;
  link: string;
}

const Card = ({ title, overview, technologies, image_path, link }: Props) => {
  const colors = ["#6940A4", "#AD1A73", "#e74a4a", "#0B6E98", "#64473A"];

  return (
    <>
      <CardDiv image_path={image_path} onClick={() => open(link)}>
        <Container
          backgroundColor="rgba(0,0,0, 0.7)"
          width="100%"
          padding="20px"
          style={{ borderRadius: "10px" }}
        >
          <CardTitle>{title}</CardTitle>
          <CardOverview>{overview}</CardOverview>
          <Container display="flex">
            {technologies &&
              technologies.map((values, idx) => (
                <CardTechnologies
                  key={idx}
                  color={colors[Math.floor(Math.random() * colors.length)]}
                >
                  {values}
                </CardTechnologies>
              ))}
          </Container>
        </Container>
      </CardDiv>
    </>
  );
};

export default Card;
