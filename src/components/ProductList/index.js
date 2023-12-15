import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 877px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;