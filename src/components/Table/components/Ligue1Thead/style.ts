import styled from 'styled-components';

export const Container = styled.thead`
  tr {
    background-color: #d0fb0c;
    border-bottom: 0;
    color: #091c3e;

    font-family: 'Ligue 1 V1 Medium', sans-serif;
    font-size: 30px;
    text-transform: uppercase;

    th {
      padding: 8px 10px;
      padding-bottom: 5px;

      &:first-child {
        background: linear-gradient(
          115deg,
          #ffffff 91.99%,
          rgba(255, 255, 255, 0) 91.99%
        );

        font-family: 'Ligue 1 V1 Bold', sans-serif;
        text-align: left;
        padding-left: 42px;

        @media (max-width: 500px) {
          background: linear-gradient(
            105deg,
            #ffffff 91.99%,
            rgba(255, 255, 255, 0) 91.99%
          );
          padding-left: 10px;
        }
      }
    }
  }
`;
