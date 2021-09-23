import styled from 'styled-components';
import { shade } from 'polished';

import BackgroundPremierImg from '../../assets/images/backPremier.png';
import BackgroundBrasileiroImg from '../../assets/images/backBrasileiro.jpg';

export const Container = styled.div`
  min-height: 100vh;

  /* background-image: url(${BackgroundPremierImg}); */
  background-image: url(${BackgroundBrasileiroImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  * {
    /* font-family: 'Premier'; */
    font-family: 'Roboto', sans-serif;
  }

  main {
    display: flex;
    justify-content: space-around;
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
  position: relative;

  div.match-header {
    background: #00ff7f;
    color: #37043c;

    padding: 0;

    font-size: 25px;
    text-align: center;

    position: relative;
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

      -webkit-box-shadow: 0px -1px 18px 4px rgba(50, 50, 50, 0.82);
      -moz-box-shadow: 0px -1px 18px 4px rgba(50, 50, 50, 0.82);
      box-shadow: 0px -1px 18px 4px rgba(50, 50, 50, 0.82);
    }
  }
`;
