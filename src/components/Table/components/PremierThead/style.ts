import styled from 'styled-components';

export const Container = styled.thead`
  tr {
    background-color: #37043c !important;
    border-bottom: 0;
    color: #fff;

    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    text-transform: uppercase;

    th {
      padding: 8px 10px;
      font-weight: 400;

      &:nth-child(-n + 3) {
        font-weight: bold;
      }
    }

    th#emptyCell {
      color: #37043c;
    }
  }
`;
