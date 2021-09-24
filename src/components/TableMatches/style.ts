import styled from 'styled-components';

export const MatchsContainer = styled.section`
  div#sub-header {
    font-size: 30px;
    font-weight: 500;

    display: flex;
    justify-content: space-between;

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
`;

export const MatchContent = styled.div`
  position: relative;

  div.match-header {
    background: #00ff7f;
    color: #37043c;

    padding: 0;

    font-size: 15px;
    font-weight: 600;
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

      padding: 10px;

      background-color: #37043c;
      color: #fff;

      font-size: 22px;
      text-transform: uppercase;

      -webkit-box-shadow: 0px -1px 18px 4px rgba(50, 50, 50, 0.82);
      -moz-box-shadow: 0px -1px 18px 4px rgba(50, 50, 50, 0.82);
      box-shadow: 0px -1px 18px 4px rgba(50, 50, 50, 0.82);

      span {
        min-width: 55px;

        display: flex;
        justify-content: center;
      }
    }
  }
`;
