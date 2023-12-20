import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: var(--grey-0);

  i {
    position: relative;
    display: none;
  }

  .icon {
    display: none;
  }

  .icon__count {
    position: absolute;
    top: -8px;
    left: -5px;
    background-color: red;
    width: 15px;
    color: #fff;
    font-size: 0.6rem;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    display: none;
  }

  @media (max-width: 768px) {
    i {
      display: flex;
    }
    .icon {
      display: flex;
    }

    .icon__count {
      display: flex;
    }
  }
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
