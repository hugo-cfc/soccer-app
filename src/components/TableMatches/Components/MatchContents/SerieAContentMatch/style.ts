import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.serieATim.colors.tertiary};

  border-bottom: 1px solid ${({ theme }) => theme.serieATim.text};

  font-family: 'DIN Next Light', sans-serif;
  font-weight: bold;

  div.match-header {
    display: flex;
    justify-content: center;

    & > span {
      background: ${({ theme }) => theme.serieATim.colors.secondary};
      border: 1px solid ${({ theme }) => theme.serieATim.text};

      color: ${({ theme }) => theme.serieATim.text};

      padding: 5px 10px;

      font-size: 15px;
      text-align: center;
    }
  }

  div.match-content {
    display: flex;
    justify-content: space-between;

    height: 75px;

    div.emblem-container {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.32vw 0.852vw;

      img {
        width: 40px;

        @media (max-width: 865px) {
          max-width: 30px;
        }
      }
    }

    div.score {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;

      padding: 0.533vw;

      color: ${({ theme }) => theme.serieATim.text};

      font-size: 22px;
      text-transform: uppercase;

      span {
        min-width: 55px;

        display: flex;
        justify-content: center;
      }
    }
  }
`;
