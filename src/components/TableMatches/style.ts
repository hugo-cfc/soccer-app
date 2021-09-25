import styled from 'styled-components';

export const MatchsContainer = styled.div`
  margin-bottom: 15px;

  min-width: 355px;

  div#sub-header {
    font-size: 25px;
    font-weight: 500;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 14px 10px;

    button {
      background: transparent;
      border: 0;
      padding: 0;

      font-size: 40px;

      display: flex;
      align-items: center;

      &:last-child {
        transform: rotate(180deg);
      }
    }
  }
`;
