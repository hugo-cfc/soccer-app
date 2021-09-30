import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.66);
  border-radius: 10px;

  font-family: 'Core Sans C 25', sans-serif;

  margin-top: 5px;
  padding: 7px;

  div.match-header {
    color: #f4fcc8;

    background: rgba(12, 27, 35, 0.63);
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

      background: rgba(12, 18, 21, 0.63);

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

      color: #fff;

      font-size: 22px;
      text-transform: uppercase;

      span.name-team-span {
        background: rgba(12, 27, 35, 0.63);

        color: #f4fcc8;

        min-width: 80px;
        border-radius: 5px;
        padding: 0 17px;

        display: flex;
        justify-content: center;

        margin: 0 5px;
      }

      span.score-span {
        background: rgba(8, 14, 16, 0.63);
        border: 1px solid #293d44;

        font-size: 35px;
        color: #92daec;
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
