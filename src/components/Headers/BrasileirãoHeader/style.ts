import styled from 'styled-components';

export const Container = styled.header`
  height: 120px;
  background: linear-gradient(
    178deg,
    #38ff00 62.82%,
    rgba(56, 255, 0, 0) 63.89%
  );

  color: #001959;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-bottom: 35px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 73px;

      margin-right: 16px;
    }

    h1 {
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      font-size: 28px;
      text-transform: uppercase;
    }
  }
`;
