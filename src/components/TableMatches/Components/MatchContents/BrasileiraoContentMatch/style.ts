import styled from 'styled-components';

export const Container = styled.div`
  font-size: 15px;
  font-weight: 600;

  min-width: 300px;
  height: fit-content;

  div.match-header {
    background: #001959;

    margin-bottom: 5px;
    padding: 0;

    text-align: center;

    & > span {
      background: linear-gradient(
        183deg,
        #38ff00 75.21%,
        rgba(56, 255, 0, 0) 78.22%,
        rgba(56, 255, 0, 0) 77.91%
      );
      color: #001959;

      padding: 5px;
      padding-bottom: 8px;
    }
  }

  div.match-content {
    display: flex;
    flex-direction: column;

    div.team-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 10px 15px;

      color: #fff;

      &:nth-child(2) {
        position: relative;
        border-top: 1px solid #001959;

        &:after {
          content: '';
          display: block;
          width: 82%;
          height: 2px;
          padding: 0;
          margin: 0;
          background-color: #38ff00;
          position: absolute;
          right: 0px;
          top: -1px;
        }
      }

      div.team-info {
        display: flex;
        align-items: center;

        img {
          width: 30px;

          margin-right: 10px;
        }
      }
    }
  }
`;
