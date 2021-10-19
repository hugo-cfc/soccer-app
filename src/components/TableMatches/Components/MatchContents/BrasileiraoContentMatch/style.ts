import styled from 'styled-components';

export const Container = styled.div`
  font-size: 15px;
  font-weight: 600;

  min-width: 300px;
  height: fit-content;

  div.match-header {
    margin-bottom: 5px;
    padding: 0;

    text-align: center;

    & > span {
      background: ${({ theme }) =>
        theme.brasileirao.backgrounds.contentMatchHeader};
      color: ${({ theme }) => theme.brasileirao.colors.primary};

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

      color: ${({ theme }) => theme.brasileirao.backgrounds.table};

      &:nth-child(2) {
        position: relative;
        border-top: 1px solid ${({ theme }) => theme.brasileirao.colors.primary};

        &:after {
          content: '';
          display: block;
          width: 82%;
          height: 2px;
          padding: 0;
          margin: 0;
          background-color: ${({ theme }) =>
            theme.brasileirao.colors.secondary};
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
