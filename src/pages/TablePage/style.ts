import styled from 'styled-components';
import { shade } from 'polished';

import BackgroundImg from '../../assets/images/background.jpg';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  justify-content: space-around;

  background-image: url(${BackgroundImg});
  background-size: cover;

  * {
    font-family: 'Premier';
    font-weight: 500;
  }

  table {
    border-collapse: collapse;

    thead tr {
      background-color: #37043c !important;
      border-bottom: 0;
      color: #fff;
    }

    tr {
      background-color: #e6e6e6;
      border-bottom: 1px solid #37043c;

      & td {
        color: #37043c;

        &.team-name-td {
          text-align: left;
        }
      }
    }

    td,
    th {
      padding: 8px 10px;

      font-size: 30px;
      letter-spacing: 0.05em;
      text-align: center;
    }
    tr td:first-child {
      font-weight: bold;
    }

    tr:nth-child(-n + 5) {
      background-color: #00ff7f;
      & td {
        color: #fff;
      }
    }

    tr:nth-child(6) {
      background-color: #00f1ff;
      & td {
        color: #fff;
      }
    }

    tr:nth-child(n + 19) {
      background-color: #fd005b;
      & td {
        color: #fff;
      }
    }
  }
`;

export const MatchsContainer = styled.section`
  width: 355px;

  header {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #37043c;
    color: #00f1ff;

    height: 50px;

    img {
      width: 100px;
    }
  }

  div#sub-header {
    background-color: #00f1ff;
    color: #fff;
    font-size: 36px;

    display: flex;
    justify-content: space-between;

    padding: 14px 10px;

    button {
      background: transparent;
      color: #fff;
      border: 0;
      padding: 0;

      font-size: 40px;

      display: flex;

      &:last-child {
        transform: rotate(180deg);
      }

      &:hover path {
        color: ${shade(0.2, '#fff')};
      }
    }
  }
`;

export const MatchContent = styled.div`
  div.match-header {
    background: #00ff7f;
    color: #37043c;

    padding: 0;

    font-size: 25px;
    text-align: center;
  }

  div.match-content {
    display: flex;
    justify-content: space-between;

    background: #fff;

    div.emblem-container {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 6px 16px;

      img {
        width: 40px;
      }
    }

    div.score {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;

      background-color: #37043c;
      color: #fff;

      font-size: 28px;

      -webkit-box-shadow: 0px 7px 12px 4px rgba(50, 50, 50, 0.62);
      -moz-box-shadow: 0px 7px 12px 4px rgba(50, 50, 50, 0.62);
      box-shadow: 0px 7px 12px 4px rgba(50, 50, 50, 0.62);
    }
  }
`;
