import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${({ theme }) => theme.general.backgroundModal};
  backdrop-filter: blur(7px);

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;

  div#requisition-error-container {
    background: ${({ theme }) => theme.general.backgroundContainerWarnings};
    border: 3px solid ${({ theme }) => theme.general.text};
    color: ${({ theme }) => theme.general.text};

    max-width: 900px;
    padding: 60px;

    font-family: Rajdhani, sans-serif;

    display: flex;

    img {
      border: 3px solid ${({ theme }) => theme.general.text};

      margin-right: 40px;

      max-width: 300px;
    }

    div#requisition-error-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        text-align: center;

        margin-bottom: 40px;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${({ theme }) => theme.general.text};

        svg {
          margin-right: 10px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    div#requisition-error-container {
      width: 700px;

      padding: 30px;
    }
  }

  @media (max-width: 730px) {
    div#requisition-error-container {
      width: 400px;

      img {
        width: 90px;
        height: 90px;
      }

      div#requisition-error-content {
        h1 {
          margin-bottom: 40px;

          font-size: 1rem;
        }

        a {
          svg {
            margin-right: 10px;
          }

          h2 {
            font-size: 0.8rem;
          }
        }
      }

      padding: 15px;
    }
  }
`;
