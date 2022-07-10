import styled from "styled-components";

export const Nav = styled.div`
  height: 60px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  transition: transform 0.3s linear;
  transform: translateY(0px);

  @media (max-width: 500px) {
    display: block;
    height: 190px;
    transform: translateY(-130px);
  }

  @media (min-width: 501px) {
    transform: translateY(0px) !important;
  }
`;

export const NavLinks = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color};
    padding: 0px 10px 0px 10px;
    font-size: 15pt;
  }

  @media (max-width: 500px) {
    display: block;
    padding-bottom: 10px;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  //text-align: end;

  @media (max-width: 500px) {
    display: block;
    padding-top: 10px;
  }
`;
