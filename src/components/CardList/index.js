import styled from "styled-components";

export const Container = styled.div`
  width: 365px;
  border-radius: 0px 0px 5px 5px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;

  footer {
    padding: 10px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-top: 1px solid #e0e0e0;

    > div {
      margin-top: 14px;
      display: flex;
      justify-content: space-between;

      strong {
        color: #333;
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
      }

      span {
        color: #828282;
        font-family: "Inter", sans-serif;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
      }
    }
  }

  @media (max-width:768px) {
    display: none;
  }
`;

export const Content = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 306px;
  overflow-y: auto;

  p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 300;
    font-family: "Inter", sans-serif;
  }
`;

export const Head = styled.div`
  height: 65px;
  color: #fff;
  padding-inline-start: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px 5px 0px 0px;
  background: var(--color-primary);
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
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
  height: 60px;
  color: #fff;
  padding: 0px 20px;

  &:hover {
    border-radius: 8px;
    border: 2px solid var(--color-primary-50);
    background: var(--color-primary-50);
  }
`;
