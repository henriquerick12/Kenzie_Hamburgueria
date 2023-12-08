import styled from "styled-components";

export const Container = styled.div`

  
`;


export const Body = styled.div`
  display: flex;
  gap: 15px;

  .body__img {
    height: 75px;
    padding: 5px;
    width: 85px;
    background-color: var(--grey-20);
    border-radius: 8px;

    img {
      display: flex;
      width: 100%;
      object-fit: cover;
    }
  }

  .body__content {
    display: flex;
    justify-content: space-between;
    flex: 1;

    span {
      color: #333;
      font-family: "Inter", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      display: block;
      margin: 10px 0;
    }

    p {
      display: flex;
      color: var(--grey-300);
      font-family: "Inter", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
    }

    button {
      color: #bdbdbd;
      font-family: "Inter", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      border: none;
      padding: 10px 0;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;


