import styled from 'styled-components';

export const Container = styled.thead`
  tr {
    height: 120px;
    background: linear-gradient(
      178deg,
      #38ff00 58.11%,
      #001959 59.12%
    ) !important;
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
      color: transparent;
    }
  }
`;
