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
        font-size: .9rem;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; 
      }
    }
  }
`;

export const Content = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
