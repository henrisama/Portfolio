import styled from "styled-components";

export const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.secundary};

  @media (max-width: 600px) {
    display: block;
  }
`;

export const FooterSubDiv = styled.div`
  width: 50%;
  padding: 20px 0px;
  text-align: center;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FooterIconsDiv = styled.div`
  display: flex;
  justify-content: end;
  height: 100%;
  align-items: center;
  padding: 0px 20px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
export const FooterIconsSubDiv = styled.div`
  margin-right: 20px;

  @media (max-width: 600px) {
    margin: 0px;
    padding: 0px 20px;
  }
`;
