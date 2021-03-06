import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  idCompetition?: string;
}

export const Container = styled.div<ContainerProps>`
  max-width: 98vw;
  height: fit-content;

  @media (max-width: 870px) {
    align-self: flex-start;
  }

  @media (max-width: 675px) {
    max-width: 100vw;

    table tbody tr td,
    th {
      font-size: 24px;
    }
  }

  .top-table {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 40px;
    }
  }

  div#table-container-inside {
    overflow: auto;
  }

  table {
    border-collapse: collapse;
    white-space: nowrap;

    thead {
      th {
        min-width: 66px;
        text-transform: uppercase;
        font-size: 24px;
      }
    }

    tbody tr td {
      padding: 8px 10px;
      text-align: center;
      text-transform: uppercase;
      font-size: 24px;

      &.team-name-td {
        text-align: left;
      }
    }
  }

  ${({ idCompetition }) =>
    idCompetition === '2002' &&
    css`
      background: ${({ theme }) => theme.bundesliga.backgrounds.background};

      div.top-table {
        color: ${({ theme }) => theme.bundesliga.colors.secondary};

        padding: 25px 0;

        h1 {
          font-family: 'Rajdhani', sans-serif;
        }
      }

      table {
        thead {
          tr {
            background: ${({ theme }) =>
              theme.bundesliga.backgrounds.positions.default};
            color: ${({ theme }) =>
              theme.bundesliga.backgrounds.opaqueBackgroundDark};

            font-family: 'Rajdhani', sans-serif;
          }
        }

        tbody tr {
          font-family: 'Rajdhani', sans-serif;
          font-weight: bold;
          color: ${({ theme }) =>
            theme.bundesliga.backgrounds.opaqueBackgroundDark};

          background: ${({ theme }) =>
            theme.bundesliga.backgrounds.positions.default};

          &:nth-child(-n + 4) {
            background: ${({ theme }) =>
              theme.bundesliga.backgrounds.positions.championsDrawdown};

            td {
              color: ${({ theme }) => theme.bundesliga.colors.secondary};
            }
          }

          &:nth-child(n + 5):nth-child(-n + 6) {
            background: transparent;

            td {
              color: ${({ theme }) => theme.bundesliga.colors.secondary};
            }
          }

          &:nth-child(7) {
            background: ${({ theme }) =>
              theme.bundesliga.backgrounds.positions.conferenceLeague};
          }

          &:nth-child(16) {
            background: ${({ theme }) =>
              theme.bundesliga.backgrounds.positions.drawdownPlayoffs};

            td {
              color: ${({ theme }) => theme.bundesliga.colors.secondary};
            }
          }

          &:nth-child(n + 17) {
            background: ${({ theme }) =>
              theme.bundesliga.backgrounds.positions.championsDrawdown};

            td {
              color: ${({ theme }) => theme.bundesliga.colors.secondary};
            }
          }
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2013' &&
    css`
      table {
        thead {
          tr {
            height: 120px;
            background: ${({ theme }) =>
              theme.brasileirao.backgrounds.theaderBackground};

            th {
              padding-top: 75px;

              font-weight: 400;
              color: ${({ theme }) => theme.brasileirao.colors.secondary};

              &:nth-child(2) {
                font-weight: bold;
              }
            }

            th.classification-name {
              font-size: 24px;
              font-weight: 500;
              text-transform: uppercase;
              color: ${({ theme }) => theme.brasileirao.colors.primary};

              padding-bottom: 40px;
              padding-top: 0px;

              b {
                font-weight: 900;
              }
            }

            @media (max-width: 414px) {
              background: ${({ theme }) =>
                theme.brasileirao.backgrounds.theaderBackgroundShort};
            }
          }
        }

        tbody tr {
          background: ${({ theme }) => theme.brasileirao.backgrounds.table};

          td {
            font-family: Roboto, sans-serif;
            padding: 8px 10px;
            text-align: center;

            &:nth-child(-n + 3) {
              font-weight: bold;
            }

            &.team-name-td {
              text-align: left;
            }

            font-size: 22px;
            color: ${({ theme }) => theme.brasileirao.colors.primary};

            &.positionCell {
              padding: 4px 8px;

              .positionContainer {
                padding: 3px 5px;
              }
            }

            &:nth-child(n + 2) {
              border-bottom: 2px solid
                ${({ theme }) => theme.brasileirao.colors.secondary};
            }
          }

          &:nth-child(-n + 4) {
            td {
              .positionContainer {
                background: ${({ theme }) =>
                  theme.brasileirao.colors.secondary};
              }
            }
          }

          &:nth-child(n + 5):nth-child(-n + 6) {
            td {
              .positionContainer {
                background: ${({ theme }) =>
                  theme.brasileirao.backgrounds.positions.playoffsLibertadores};
              }
            }
          }

          &:nth-child(n + 17) {
            td {
              .positionContainer {
                background: ${({ theme }) =>
                  theme.brasileirao.backgrounds.positions.drawdown};
              }
            }
          }

          &:last-child {
            td {
              border: 0;
            }
          }
        }
      }
    `}

  ${({ idCompetition }) =>
    idCompetition === '2014' &&
    css`
      background: ${({ theme }) => theme.laliga.backgrounds.primaryBackground};

      padding: 17px;
      border-radius: 10px;

      div.top-table {
        color: ${({ theme }) => theme.laliga.texts.primaryText};

        h1 {
          font-weight: normal;
          font-family: 'Core Sans C 25', sans-serif;
        }

        img {
          width: 160px;
        }
      }

      table {
        border-collapse: separate;
        border-spacing: 5px;

        thead {
          tr {
            background: ${({ theme }) =>
              theme.laliga.backgrounds.secondaryBackground};
            color: ${({ theme }) => theme.laliga.texts.primaryText};

            font-family: 'Core Sans C 25';

            font-size: 27px;
            text-transform: uppercase;

            th {
              padding: 0px 17px;
              border-radius: 4px;

              font-weight: normal;

              &:first-child {
                color: transparent;
              }

              &:nth-child(n + 2) {
                min-width: 70px;
              }
            }
          }
        }

        tbody:before {
          content: '@';
          display: block;
          line-height: 0px;
          text-indent: -99999px;
        }

        tbody tr {
          background: ${({ theme }) =>
            theme.laliga.backgrounds.primaryBackground};
          border-radius: 10px;
          color: ${({ theme }) => theme.laliga.texts.secondaryText};

          font-size: 24px;
          white-space: nowrap;

          font-family: 'Core Sans C 25', sans-serif;

          td {
            padding: 0px 17px;

            border-radius: 4px;

            background: ${({ theme }) =>
              theme.laliga.backgrounds.secondaryBackground};

            &:nth-child(-n + 2) {
              color: ${({ theme }) => theme.laliga.texts.primaryText};
            }

            &:nth-child(2n + 4) {
              background: ${({ theme }) =>
                theme.laliga.backgrounds.tertiaryBackground};
            }
          }

          &:nth-child(-n + 4) td:first-child {
            background: ${({ theme }) =>
              theme.laliga.backgrounds.positions.champions};
          }

          &:nth-child(n + 5):nth-child(-n + 6) td:first-child {
            background: ${({ theme }) =>
              theme.laliga.backgrounds.positions.europaleague};
          }

          &:nth-child(n + 7):nth-child(-n + 17) td:first-child {
            border: 1px solid
              ${({ theme }) => theme.laliga.borders.generalBorder};
          }

          &:nth-child(n + 18) td:first-child {
            background: ${({ theme }) =>
              theme.laliga.backgrounds.positions.drawdown};
          }
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2015' &&
    css`
      div#table-container-inside {
        border: 1px solid
          ${({ theme }) => theme.ligue1.backgrounds.secondaryColor};
      }

      table {
        thead {
          tr {
            background-color: ${({ theme }) =>
              theme.ligue1.backgrounds.secondaryColor};
            color: ${({ theme }) => theme.ligue1.backgrounds.primaryColor};

            font-family: 'Ligue 1 V1 Medium', sans-serif;
            font-size: 30px;

            th {
              padding: 8px 10px;
              padding-bottom: 5px;

              &:first-child {
                background: ${({ theme }) =>
                  theme.ligue1.backgrounds.theaderBackground};

                font-family: 'Ligue 1 V1 Bold', sans-serif;
                text-align: left;
                padding-left: 42px;
                padding-right: 188px;

                @media (max-width: 500px) {
                  background: ${({ theme }) =>
                    theme.ligue1.backgrounds.theaderBackgroundShort};
                  padding-left: 10px;
                }
              }
            }
          }
        }

        tbody tr {
          background: ${({ theme }) =>
            theme.ligue1.backgrounds.transparentBackground};

          font-family: 'Ligue 1 V1 Light', sans-serif;
          font-weight: 300;
          color: ${({ theme }) => theme.ligue1.texts.primaryText};

          td {
            &:first-child {
              font-family: 'Ligue 1 V1 Bold', sans-serif;
            }

            &:nth-child(3) {
              color: ${({ theme }) => theme.ligue1.backgrounds.secondaryColor};
            }
          }

          &:nth-child(-n + 6) {
            td:nth-child(2) {
              font-family: 'Ligue 1 V1 Medium', sans-serif;
            }
          }

          &:nth-child(-n + 2) {
            td:nth-child(-n + 2) {
              color: ${({ theme }) => theme.ligue1.backgrounds.secondaryColor};
            }
          }

          &:nth-child(3) {
            border-bottom: 1px solid
              ${({ theme }) => theme.ligue1.backgrounds.secondaryColor};
            td:nth-child(-n + 2) {
              color: ${({ theme }) =>
                theme.ligue1.backgrounds.positions.playoffsChampions};
            }
          }

          &:nth-child(5) {
            border-bottom: 1px solid
              ${({ theme }) => theme.ligue1.backgrounds.secondaryColor};
          }

          &:nth-child(n + 4):nth-child(-n + 5) {
            td:nth-child(-n + 2) {
              color: ${({ theme }) =>
                theme.ligue1.backgrounds.positions.europaLeague};
            }
          }

          &:nth-child(6) {
            border-bottom: 1px solid
              ${({ theme }) => theme.ligue1.backgrounds.secondaryColor};

            td:nth-child(-n + 2) {
              color: ${({ theme }) =>
                theme.ligue1.backgrounds.positions.conferenceLeague};
            }
          }

          &:nth-child(18) {
            border-top: 1px solid
              ${({ theme }) => theme.ligue1.backgrounds.secondaryColor};

            td:nth-child(-n + 2) {
              color: ${({ theme }) =>
                theme.ligue1.backgrounds.positions.playoffsDrawdown};
            }
          }

          &:nth-child(n + 19) {
            td:nth-child(-n + 2) {
              color: ${({ theme }) =>
                theme.ligue1.backgrounds.positions.drawdown};
            }
          }
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2019' &&
    css`
      thead {
        tr {
          background: ${({ theme }) => theme.serieATim.background};
          color: ${({ theme }) => theme.serieATim.colors.primary};
          border-bottom: 3px solid ${({ theme }) => theme.serieATim.text};

          font-family: 'DIN Next Bold', sans-serif;
          font-size: 30px;

          th {
            padding: 8px;
            min-width: 66px;
            font-weight: 400;

            &:first-child {
              background: ${({ theme }) => theme.serieATim.colors.primary};
            }
          }
        }
      }

      tbody tr {
        background-color: ${({ theme }) => theme.serieATim.background};
        color: ${({ theme }) => theme.premier.backgrounds.secondaryBackground};
        border-bottom: 3px solid ${({ theme }) => theme.serieATim.text};

        font-size: 24px;

        &:last-child {
          border: 0;
        }

        td {
          font-weight: bold;
          font-family: 'DIN Next Light', sans-serif;
          color: ${({ theme }) => theme.serieATim.colors.primary};

          &:nth-child(2n + 1) {
            background: ${({ theme }) =>
              shade(0.2, theme.serieATim.colors.primary)};
            color: ${({ theme }) => theme.serieATim.text};
          }

          &:nth-child(2n + 4) {
            background: ${({ theme }) =>
              shade(0.2, theme.serieATim.colors.secondary)};
            color: ${({ theme }) => theme.serieATim.text};
          }
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2021' &&
    css`
      thead {
        tr {
          background: ${({ theme }) =>
            theme.premier.backgrounds.secondaryBackground};
          color: ${({ theme }) => theme.premier.texts.primaryText};

          font-family: 'Poppins', sans-serif;
          font-size: 30px;

          th {
            padding: 8px;
            min-width: 66px;
            font-weight: 400;

            &:nth-child(-n + 2) {
              font-weight: bold;
            }
          }
        }
      }

      tbody tr {
        background-color: ${({ theme }) =>
          theme.premier.backgrounds.primaryBackground};

        color: ${({ theme }) => theme.premier.backgrounds.secondaryBackground};

        font-size: 24px;

        td {
          font-family: 'Poppins', sans-serif;

          &:nth-child(-2n + 3) {
            font-weight: bold;
          }

          &:nth-child(2n + 3) {
            background: ${({ theme }) =>
              shade(0.2, theme.premier.backgrounds.primaryBackground)};
          }
        }

        &:nth-child(-n + 4) {
          background: ${({ theme }) =>
            theme.premier.backgrounds.positions.champions};

          td:nth-child(2n + 3) {
            background: ${({ theme }) =>
              shade(0.2, theme.premier.backgrounds.positions.champions)};
          }
          td {
            color: ${({ theme }) => theme.premier.texts.primaryText};
          }
        }

        &:nth-child(5) {
          background: ${({ theme }) =>
            theme.premier.backgrounds.positions.europaleague};

          td:nth-child(2n + 3) {
            background: ${({ theme }) =>
              shade(0.2, theme.premier.backgrounds.positions.europaleague)};
          }

          td {
            color: ${({ theme }) => theme.premier.texts.primaryText};
          }
        }

        &:nth-child(n + 18) {
          background: ${({ theme }) =>
            theme.premier.backgrounds.positions.drawdown};

          td:nth-child(2n + 3) {
            background: ${({ theme }) =>
              shade(0.2, theme.premier.backgrounds.positions.drawdown)};
          }

          td {
            color: ${({ theme }) => theme.premier.texts.primaryText};
          }
        }
      }
    `};
`;
