import styled, { css } from 'styled-components';

interface ContainerProps {
  closed: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ closed }) =>
    closed &&
    css`
      display: none !important;
    `}

  height: 100vh;
  padding: 30px;

  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(7px);

  display: flex;
  align-items: center;
  justify-content: center;

  div#warnings-container {
    background: rgba(0, 0, 0, 0.72);
    border: 3px solid #ffffff;
    color: #ffffff;

    max-width: 600px;
    padding: 25px;

    font-family: Rajdhani, sans-serif;

    position: relative;

    button {
      background: transparent;
      border: 0;

      color: #ffffff;

      position: absolute;
      right: 20px;
    }

    h1 {
      text-align: center;

      margin-bottom: 20px;
    }

    section {
      font-size: 1.1rem;

      p + p {
        margin-top: 20px;
      }

      p a {
        color: #fff;
      }
    }
  }

  @media (max-width: 600px) {
    div#warnings-container {
      max-height: 90vh;

      h1 {
        margin-bottom: 10px;
      }

      section {
        font-size: 0.85rem;
      }
    }
  }
`;
