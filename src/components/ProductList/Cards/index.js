import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 5px;
  border: 2px solid var(--grey-20);
  background: #fff;
`;

export const Head = styled.div`
  background-color: var(--grey-20);
  display: flex;
  justify-content: center;
  text-align: center;

  img {
    text-align: center;
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Body = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  h3 {
    color: #333;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-style: normal;
    padding-top: 6.667px;
    font-weight: 700;
    line-height: 24px;

    @media (max-width: 768px) {
      font-size: 16px;
  }
  }

  span:nth-child(2) {
    color: var(--grey-300);
    display: inline-flex;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-size: 12px;
    margin-bottom: 14px;
    margin-top: 10px;
    font-weight: 400;
    line-height: 16px;
  }

  span:nth-child(3) {
    color: var(--color-primary);
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 14px;
  }
`;

export const Button = styled.button`
  border-radius: 8px;
  font-weight: 500;
  transition: 0.3s ease;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  border: 2px solid var(--color-primary);
  background: var(--color-primary);
  height: 40px;
  color: #fff;
  padding: 0px 20px;

  &:hover {
    border-radius: 8px;
    border: 2px solid var(--color-primary-50);
    background: var(--color-primary-50);
  }
`;
