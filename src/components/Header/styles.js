import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: var(--grey-0);

  
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1360px;
  padding-inline: 1.5rem;
  height: 100%;

  img {
    display: flex;
    width: 150px;
    height: 22.852px;
  }
`;

export const Search = styled.div`
  gap: 20px;
  height: 60px;
  border-radius: 8px;
  border: 1px solid var(--grey-20);
  background: #fff;
  padding: 0px 10px 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    padding: 10px 15px;
    border-radius: 8px;
    border: 0px solid var(--grey-100);
    background: #fff;
    color: var(--grey-100);
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
        color: var(--grey-20);
    }
  }
  @media (max-width:768px) {
    display: none;
  }
`;

export const Button = styled.button `
  border-radius: 8px;
  font-weight: 500;
  transition: .3s ease;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  border: 2px solid var(--color-primary);
  background: var(--color-primary);
  height: 60px;
  color: #fff;
  padding: 0px 20px;

  &:hover {
    border-radius: 8px;
    border: 2px solid var(--color-primary-50);
    background: var(--color-primary-50);
  }
`