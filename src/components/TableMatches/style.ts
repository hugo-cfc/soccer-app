import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface MatchesContainerProps {
  idCompetition: string;
}

export const MatchesContainer = styled.div<MatchesContainerProps>`
  margin-bottom: 100px;

  min-width: 355px;

  @media (max-width: 500px) {
    min-width: 0vw;
    width: 100vw;
  }

  ${({ idCompetition }) =>
    idCompetition === '2002' &&
    css`
      div#headers-wrapper {
        div#header-table-matches {
          padding: 8px 0;

          background: #353733;

          img {
            width: 60px;
          }
        }

        div#sub-header {
          background: #c90e17;
          color: #fff;

          font-size: 30px;

          display: flex;
          justify-content: space-between;

          padding: 14px 10px;

          div#current-match-container {
            font-family: 'Rajdhani', sans-serif;
          }

          button {
            color: #fff;

            &:hover path {
              color: ${shade(0.2, '#fff')};
            }
          }
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2013' &&
    css`
      background-color: ${({ theme }) => theme.brasileirao.colors.primary};

      div#headers-wrapper {
        background: ${({ theme }) =>
          theme.brasileirao.backgrounds.headerBackgroundTableMatches};
        color: ${({ theme }) => theme.brasileirao.colors.secondary};

        div#header-table-matches {
          color: ${({ theme }) => theme.brasileirao.colors.primary};

          height: 50px;

          font-size: 24px;
          font-weight: bold;

          img {
            display: none;
          }
        }

        div#sub-header {
          button {
            color: ${({ theme }) => theme.brasileirao.colors.secondary};

            &:hover path {
              color: ${({ theme }) =>
                shade(0.2, theme.brasileirao.colors.secondary)};
            }
          }
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2014' &&
    css`
      background: ${({ theme }) => theme.laliga.backgrounds.primaryBackground};

      border-radius: 10px;
      padding: 10px;

      font-family: 'Core Sans C 25', sans-serif;

      div#headers-wrapper {
        div#header-table-matches {
          padding-top: 17px;

          img {
            width: 300px;
          }
        }

        div#sub-header {
          font-family: 'Core Sans C 25', sans-serif;
          color: ${({ theme }) => theme.laliga.texts.secondaryText};
          font-size: 30px;
          font-weight: 200;

          button {
            color: ${({ theme }) => theme.laliga.texts.secondaryText};

            &:hover path {
              color: ${({ theme }) =>
                shade(0.2, theme.laliga.texts.secondaryText)};
            }
          }
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2015' &&
    css`
      background: ${({ theme }) =>
        theme.ligue1.backgrounds.transparentBackground};
      border: 1px solid
        ${({ theme }) => theme.ligue1.backgrounds.secondaryColor};

      div#headers-wrapper {
        div#header-table-matches {
          padding: 8px 0;

          img {
            width: 150px;
          }
        }

        div#sub-header {
          background-color: ${({ theme }) =>
            theme.ligue1.backgrounds.secondaryColor};
          color: ${({ theme }) => theme.ligue1.backgrounds.primaryColor};

          font-size: 30px;

          div#current-match-container {
            font-family: 'Ligue 1 V1 Medium', sans-serif;
          }

          button {
            color: ${({ theme }) => theme.ligue1.backgrounds.primaryColor};

            &:hover path {
              color: ${({ theme }) =>
                shade(0.2, theme.ligue1.backgrounds.primaryColor)};
            }
          }
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2021' &&
    css`
      font-family: 'Poppins', sans-serif;

      div#headers-wrapper {
        div#header-table-matches {
          background-color: ${({ theme }) =>
            theme.premier.backgrounds.secondaryBackground};

          height: 50px;

          img {
            width: 100px;
          }
        }

        div#sub-header {
          background-color: ${({ theme }) =>
            theme.premier.backgrounds.positions.europaleague};

          color: ${({ theme }) => theme.premier.texts.primaryText};
          font-size: 30px;
          font-weight: 500;

          button {
            color: ${({ theme }) => theme.premier.texts.primaryText};

            &:hover path {
              color: ${({ theme }) =>
                shade(0.2, theme.premier.texts.primaryText)};
            }
          }
        }
      }
    `};

  div#headers-wrapper {
    div#header-table-matches {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div#sub-header {
      font-size: 25px;
      font-weight: 500;

      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 14px 10px;

      button {
        background: transparent;
        border: 0;
        padding: 0;

        font-size: 40px;

        display: flex;
        align-items: center;

        &:last-child {
          transform: rotate(180deg);
        }
      }
    }
  }
`;
