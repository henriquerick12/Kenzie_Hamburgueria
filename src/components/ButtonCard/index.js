import styled from "styled-components";

export const Button = styled.button`
  border-radius: 8px;
  font-weight: 500;
  transition: .3s ease;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  border: 2px solid var(--color-primary);
  background: var(--color-primary);
  height: ${(props) => (props.size ? "40px" : "60px")};
  color: #fff;
  padding: 0px 20px;

  &:hover {
    border-radius: 8px;
    border: 2px solid var(--color-primary-50);
    background: var(--color-primary-50);
  }
`;
