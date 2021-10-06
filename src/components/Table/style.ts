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
      background: rgba(0, 0, 0, 0.49);

      div.top-table {
        color: #fff;

        padding: 25px 0;

        h1 {
          font-family: 'Rajdhani', sans-serif;
        }
      }

      table {
        thead {
          tr {
            background: rgba(229, 229, 229, 0.63);
            color: #3a3d39;

            font-family: 'Rajdhani', sans-serif;
          }
        }

        tbody tr {
          font-family: 'Rajdhani', sans-serif;
          font-weight: bold;
          color: #313332;

          background: rgba(229, 229, 229, 0.63);

          &:nth-child(-n + 4) {
            background: rgba(189, 46, 57, 0.6);

            td {
              color: #fff;
            }
          }

          &:nth-child(n + 5):nth-child(-n + 6) {
            background: transparent;

            td {
              color: #fff;
            }
          }

          &:nth-child(7) {
            background: rgba(229, 229, 229, 0.8);
          }

          &:nth-child(16) {
            background: rgba(222, 93, 102, 0.6);

            td {
              color: #fff;
            }
          }

          &:nth-child(n + 17) {
            background: rgba(189, 46, 57, 0.6);

            td {
              color: #fff;
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
            background: linear-gradient(178deg, #38ff00 58.11%, #001959 59.12%);
            color: #fff;

            th {
              padding-top: 75px;

              font-weight: 400;
              color: #38ff00;

              &:nth-child(2) {
                font-weight: bold;
              }
            }

            th.classification-name {
              font-size: 24px;
              font-weight: 500;
              text-transform: uppercase;
              color: #001959;

              padding-bottom: 40px;
              padding-top: 0px;

              b {
                font-weight: 900;
              }
            }

            @media (max-width: 414px) {
              background: linear-gradient(
                180deg,
                #38ff00 58.11%,
                #001959 59.12%
              );
            }
          }
        }

        tbody tr {
          background: #fff;

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
            color: #001959;

            &.positionCell {
              padding: 4px 8px;

              .positionContainer {
                padding: 3px 5px;
              }
            }

            &:nth-child(n + 2) {
              border-bottom: 2px solid #38ff00;
            }
          }

          &:nth-child(-n + 4) {
            td {
              .positionContainer {
                background-color: #38ff00;
              }
            }
          }

          &:nth-child(n + 5):nth-child(-n + 6) {
            td {
              .positionContainer {
                background-color: #ffff0d;
              }
            }
          }

          &:nth-child(n + 17) {
            td {
              .positionContainer {
                background-color: #e90909;
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
      background: rgba(0, 0, 0, 0.66);

      padding: 17px;
      border-radius: 10px;

      div.top-table {
        color: #f4fcc8;

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
            background: rgba(12, 27, 35, 0.66);
            color: #f4fcc8;

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
          background: rgba(0, 0, 0, 0.66);
          border-radius: 10px;
          color: #92daec;

          font-size: 24px;
          white-space: nowrap;

          font-family: 'Core Sans C 25', sans-serif;

          td {
            padding: 0px 17px;

            border-radius: 4px;

            background: rgba(12, 27, 35, 0.66);

            &:nth-child(-n + 2) {
              color: #f4fcc8;
            }

            &:nth-child(2n + 4) {
              background: rgba(12, 18, 21, 0.66);
            }
          }

          &:nth-child(-n + 4) td:first-child {
            background: #323578;
          }

          &:nth-child(n + 5):nth-child(-n + 6) td:first-child {
            background: #7d4c9c;
          }

          &:nth-child(n + 7):nth-child(-n + 17) td:first-child {
            border: 1px solid #293d44;
          }

          &:nth-child(n + 18) td:first-child {
            background: #c13c2d;
          }
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2015' &&
    css`
      div#table-container-inside {
        border: 1px solid #d0fb0c;
      }

      table {
        thead {
          tr {
            background-color: #d0fb0c;
            color: #091c3e;

            font-family: 'Ligue 1 V1 Medium', sans-serif;
            font-size: 30px;

            th {
              padding: 8px 10px;
              padding-bottom: 5px;

              &:first-child {
                background: linear-gradient(
                  115deg,
                  #ffffff 91.99%,
                  rgba(255, 255, 255, 0) 91.99%
                );

                font-family: 'Ligue 1 V1 Bold', sans-serif;
                text-align: left;
                padding-left: 42px;
                padding-right: 188px;

                @media (max-width: 500px) {
                  background: linear-gradient(
                    105deg,
                    #ffffff 91.99%,
                    rgba(255, 255, 255, 0) 91.99%
                  );
                  padding-left: 10px;
                }
              }
            }
          }
        }

        tbody tr {
          background: rgba(9, 28, 62, 0.89);

          font-family: 'Ligue 1 V1 Light', sans-serif;
          font-weight: 300;
          color: #fff;

          td {
            &:first-child {
              font-family: 'Ligue 1 V1 Bold', sans-serif;
            }

            &:nth-child(3) {
              color: #d0fb0c;
            }
          }

          &:nth-child(-n + 6) {
            td:nth-child(2) {
              font-family: 'Ligue 1 V1 Medium', sans-serif;
            }
          }

          &:nth-child(-n + 2) {
            td:nth-child(-n + 2) {
              color: #d0fb0c;
            }
          }

          &:nth-child(3) {
            border-bottom: 1px solid #d0fb0c;
            td:nth-child(-n + 2) {
              color: #07c26b;
            }
          }

          &:nth-child(5) {
            border-bottom: 1px solid #d0fb0c;
          }

          &:nth-child(n + 4):nth-child(-n + 5) {
            td:nth-child(-n + 2) {
              color: #00f1ff;
            }
          }

          &:nth-child(6) {
            border-bottom: 1px solid #d0fb0c;

            td:nth-child(-n + 2) {
              color: #ac965a;
            }
          }

          &:nth-child(18) {
            border-top: 1px solid #d0fb0c;

            td:nth-child(-n + 2) {
              color: #f08712;
            }
          }

          &:nth-child(n + 19) {
            td:nth-child(-n + 2) {
              color: #c13c2d;
            }
          }
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2021' &&
    css`
      thead {
        tr {
          background-color: #37043c;
          color: #fff;

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
        background-color: #e6e6e6;

        color: #37043c;
        font-size: 24px;

        td {
          font-family: 'Poppins', sans-serif;

          &:nth-child(-2n + 3) {
            font-weight: bold;
          }

          &:nth-child(2n + 3) {
            background: ${shade(0.2, '#e6e6e6')};
          }
        }

        &:nth-child(-n + 4) {
          background-color: #00ff7f;
          td:nth-child(2n + 3) {
            background: ${shade(0.2, '#00ff7f')};
          }
          td {
            color: #fff;
          }
        }

        &:nth-child(5) {
          background-color: #00f1ff;

          td:nth-child(2n + 3) {
            background: ${shade(0.2, '#00f1ff')};
          }

          td {
            color: #fff;
          }
        }

        &:nth-child(n + 18) {
          background-color: #fd005b;

          td:nth-child(2n + 3) {
            background: ${shade(0.2, '#fd005b')};
          }

          td {
            color: #fff;
          }
        }
      }
    `};
`;
