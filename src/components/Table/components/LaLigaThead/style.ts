import styled from 'styled-components';

export const Container = styled.thead`
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

    th#emptyCell {
      color: #37043c;
    }
  }
`;
