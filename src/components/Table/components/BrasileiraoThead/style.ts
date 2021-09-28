import styled from 'styled-components';

export const Container = styled.thead`
  position: relative;

  tr#header-real {
    height: 120px;
    background: linear-gradient(178deg, #38ff00 58.11%, #001959 59.12%);
    border-bottom: 0;
    color: #fff;

    th {
      padding-top: 75px !important;

      font-size: 24px;
      font-weight: 400;
      color: #38ff00;

      &:nth-child(3) {
        font-weight: bold;
      }
    }

    th.emptyCell {
      color: rgba(255, 255, 255, 0);
    }

    th.classification-name {
      font-size: 24px;
      font-weight: 500;
      text-transform: uppercase;
      color: #001959;

      padding-bottom: 40px;
      padding-top: 0px !important;

      b {
        font-weight: 900;
      }
    }

    @media (max-width: 414px) {
      background: linear-gradient(180deg, #38ff00 58.11%, #001959 59.12%);
    }
  }
`;
