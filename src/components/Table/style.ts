import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 870px) {
    align-self: flex-start;
  }

  @media (max-width: 675px) {
    max-width: 100vw;

    font-size: 20px !important;

    table tbody {
      tr {
        td,
        th {
          font-size: 20px;
        }
      }
    }
  }

  & > div {
    overflow: auto;
  }

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
