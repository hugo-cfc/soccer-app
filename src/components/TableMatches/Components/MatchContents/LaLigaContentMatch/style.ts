import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.laliga.backgrounds.primaryBackground};
  border-radius: 10px;

  font-family: 'Core Sans C 25', sans-serif;

  margin-top: 5px;
  padding: 7px;

  div.match-header {
    color: ${({ theme }) => theme.laliga.texts.primaryText};

    background: ${({ theme }) => theme.laliga.backgrounds.secondaryBackground};
    border-radius: 5px;

    width: 245px;
    margin: 0 auto;
    padding: 0;

    font-size: 15px;
    font-weight: 300;
    text-align: center;
  }

  div.match-content {
    display: flex;
    justify-content: space-between;

    div.emblem-container {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.32vw 0.852vw;
      border-radius: 10px;
      width: 70px;
      height: 70px;

      background: ${({ theme }) => theme.laliga.backgrounds.tertiaryBackground};

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

      padding: 0.27vw 0;

      font-size: 22px;
      text-transform: uppercase;

      span.name-team-span {
        background: ${({ theme }) =>
          theme.laliga.backgrounds.secondaryBackground};

        color: ${({ theme }) => theme.laliga.texts.primaryText};

        min-width: 80px;
        border-radius: 5px;
        padding: 0 17px;

        display: flex;
        justify-content: center;

        margin: 0 5px;
      }

      span.score-span {
        background: ${({ theme }) => theme.laliga.backgrounds.scoreBackground};
        border: 1px solid ${({ theme }) => theme.laliga.borders.generalBorder};

        font-size: 35px;
        color: ${({ theme }) => theme.laliga.texts.secondaryText};
        letter-spacing: 0.05em;

        border-radius: 5px;
        padding: 0.32vw 0.852vw;
        width: 60px;
        height: 60px;

        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 410px) {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;
