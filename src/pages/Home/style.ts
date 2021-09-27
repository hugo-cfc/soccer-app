import styled from 'styled-components';

import homeBackground from '../../assets/images/homeBackground.jpg';

export const Container = styled.main`
  min-height: 100vh;

  background-image: url(${homeBackground});
  background-repeat: no-repeat;
  background-position: center center;

  font-family: Rajdhani;
  color: #fff;

  position: relative;
  z-index: -2;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.53);
    z-index: -1;
  }

  section {
    width: 804px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const InfoProject = styled.div`
  margin-bottom: 55px;

  h1 {
    font-size: 96px;
    font-weight: 400;
  }

  p {
    font-size: 36px;
  }
`;

export const Contacts = styled.div`
  width: 543px;

  margin-bottom: 96px;

  h3 {
    font-size: 48px;
    font-weight: 400;
  }

  div.contacts-container {
    display: grid;
    grid-template-columns: 1fr 1fr;

    div.contact-container {
      display: flex;
      align-items: center;

      svg {
        font-size: 20px;

        margin-right: 10px;
      }
    }
  }
`;
