import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content;
  justify-content: center;

  @media (max-width: 1650px) {
    grid-template-columns: max-content max-content;
  }

  @media (max-width: 1100px) {
    grid-template-columns: max-content;
  }
`;

export default Grid;
