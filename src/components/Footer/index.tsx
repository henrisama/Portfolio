import Center from "../Center";
import Container from "../Container";
import {
  FooterDiv,
  FooterIconsDiv,
  FooterIconsSubDiv,
  FooterSubDiv,
} from "./style";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const Footer = () => {
  const iconSize = 40;

  return (
    <>
      <Container>
        <FooterDiv>
          <FooterSubDiv>
            <Center>
              <div>
                <h3>Pedro Flores</h3>
                <h4>Campo Grande - MS, Brazil 2022</h4>
              </div>
            </Center>
          </FooterSubDiv>
          <FooterSubDiv>
            <FooterIconsDiv>
              <FooterIconsSubDiv>
                <BsLinkedin
                  size={iconSize}
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/pedropiresflores/")
                  }
                  cursor="pointer"
                />
              </FooterIconsSubDiv>
              <FooterIconsSubDiv>
                <BsGithub
                  size={iconSize}
                  onClick={() => window.open("https://github.com/henrisama")}
                  cursor="pointer"
                />
              </FooterIconsSubDiv>
              <FooterIconsSubDiv>
                <MdMail
                  size={iconSize}
                  onClick={() =>
                    window.open("mailto:pedropiresflores@icloud.com")
                  }
                  cursor="pointer"
                />
              </FooterIconsSubDiv>
            </FooterIconsDiv>
          </FooterSubDiv>
        </FooterDiv>
      </Container>
    </>
  );
};

export default Footer;
