import styled from 'styled-components';

import homeBackground from '../../assets/images/backgrounds/homeBackground.jpg';

export const Container = styled.main`
  min-height: 100vh;

  display: flex;
  justify-content: space-around;

  background-image: url(${homeBackground});
  background-repeat: no-repeat;
  background-position: center center;

  font-family: Rajdhani;
  color: #fff;

  section.infos {
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

      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;

export const CompetitionsContainer = styled.section`
  width: 710px;
  height: fit-content;
  margin-top: 70px;
  padding: 40px 20px;

  background: rgba(0, 0, 0, 0.44);
  border: 3px solid #ffffff;

  h1 {
    font-size: 36px;
    font-weight: 400;
    text-align: center;

    margin-bottom: 45px;
  }

  fieldset {
    border: 0;
    border-top: 3px solid;
    padding-bottom: 40px;
    margin-left: 10px;

    legend {
      display: flex;
      align-items: center;

      font-size: 24px;

      padding-right: 10px;

      svg {
        font-size: 26px;

        margin-right: 10px;
      }
    }

    img {
      max-width: 160px;
    }

    div.leagues-container {
      display: grid;
      grid-template-columns: repeat(3, 160px);
      justify-content: center;
      justify-items: center;
      align-items: center;
      column-gap: 70px;
      row-gap: 20px;
    }
  }
`;
