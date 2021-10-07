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
      background-color: #001959;

      div#headers-wrapper {
        background: linear-gradient(178deg, #38ff00 47.83%, #001959 48.84%);
        color: #38ff00;

        div#header-table-matches {
          color: #001959;

          height: 50px;

          font-size: 24px;
          font-weight: bold;

          img {
            display: none;
          }
        }

        div#sub-header {
          button {
            color: #38ff00;

            &:hover path {
              color: ${shade(0.2, '#38ff00')};
            }
          }
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2014' &&
    css`
      background: rgba(0, 0, 0, 0.66);

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
          color: #92daec;
          font-size: 30px;
          font-weight: 200;

          button {
            color: #92daec;

            &:hover path {
              color: ${shade(0.2, '#92DAEC')};
            }
          }
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2015' &&
    css`
      background: #091c3e;
      border: 1px solid #d0fb0c;

      div#headers-wrapper {
        div#header-table-matches {
          padding: 8px 0;

          img {
            width: 150px;
          }
        }

        div#sub-header {
          background-color: #d0fb0c;
          color: #091c3e;

          font-size: 30px;

          div#current-match-container {
            padding-top: 10px;

            font-family: 'Ligue 1 V1 Medium', sans-serif;
          }

          button {
            color: #091c3e;

            &:hover path {
              color: shade(0.2, '#091C3E');
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
          background-color: #37043c;

          height: 50px;

          img {
            width: 100px;
          }
        }

        div#sub-header {
          background-color: #00f1ff;

          color: #fff;
          font-size: 30px;
          font-weight: 500;

          button {
            color: #fff;

            &:hover path {
              color: ${shade(0.2, '#fff')};
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
