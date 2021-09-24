import styled from 'styled-components';

export const Container = styled.div`
  table {
    border-collapse: collapse;

    margin-bottom: 50px;
  }

  table tbody {
    tr {
      td {
        padding: 8px 10px;
        text-align: center;
        text-transform: uppercase;

        &.team-name-td {
          text-align: left;
        }
      }
    }
  }
`;
