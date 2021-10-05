import styled, { css } from 'styled-components';

interface ContainerProps {
  idCompetition?: string;
}

export const Container = styled.div<ContainerProps>`
  max-width: 98vw;

  @media (max-width: 870px) {
    align-self: flex-start;
  }

  @media (max-width: 675px) {
    max-width: 100vw;

    font-size: 20px !important;

    table tbody tr td,
    th {
      font-size: 20px;
    }
  }

  div#table-container-inside {
    overflow: auto;
  }

  table {
    border-collapse: collapse;

    ${({ idCompetition }) =>
      idCompetition === '2014' &&
      css`
        tbody:before {
          content: '@';
          display: block;
          line-height: 10px;
          text-indent: -99999px;
        }
      `};

    tbody tr td {
      padding: 8px 10px;
      text-align: center;
      text-transform: uppercase;

      &.team-name-td {
        text-align: left;
      }
    }
  }
`;
