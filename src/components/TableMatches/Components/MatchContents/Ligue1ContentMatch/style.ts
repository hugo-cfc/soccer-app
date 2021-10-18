import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: inherit;

  div.match-header {
    display: flex;
    justify-content: center;

    & > span {
      background: ${({ theme }) => theme.ligue1.texts.primaryText};
      border: 1px solid
        ${({ theme }) => theme.ligue1.backgrounds.secondaryColor};

      color: ${({ theme }) => theme.ligue1.backgrounds.primaryColor};

      padding: 5px 10px;

      font-family: 'Ligue 1 V1 Bold', sans-serif;
      font-size: 15px;
      font-weight: 600;
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
        max-width: 40px;

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

      color: ${({ theme }) => theme.ligue1.texts.primaryText};

      font-size: 22px;
      font-family: 'Ligue 1 V1 Bold', sans-serif;
      text-transform: uppercase;

      span {
        min-width: 55px;

        display: flex;
        justify-content: center;

        &.score-number {
          color: ${({ theme }) => theme.ligue1.backgrounds.secondaryColor};
        }
      }
    }
  }
`;
