import styled from "styled-components";

export const Nav = styled.div`
  height: 70px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color};
    padding: 0px 10px 0px 10px;
    font-size: 15pt;
  }
`;
