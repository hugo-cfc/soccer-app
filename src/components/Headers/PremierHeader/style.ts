import styled from 'styled-components';

export const Container = styled.header`
  height: 70px;
  margin-bottom: 50px;

  background: linear-gradient(180deg, #fd005b 0%, #e90959 52.6%, #fd005b 100%);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 146px;

    margin-right: 16px;
  }

  h1 {
    font-weight: 300 !important;
    letter-spacing: 0.05em;
  }
`;
