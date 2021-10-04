import styled, { keyframes } from 'styled-components';

import homeBackground from '../../assets/images/backgrounds/homeBackground.jpg';

const leftFromRightAnimation = keyframes`
  0% {
    left: -500px;
    opacity: 0.5;
  }

  100% {
    left: 0px;
    opacity: 1;
  }
`;

const topFromBottomAnimation = keyframes`
  0% {
    top: -500px;
    opacity: 0.5;
  }

  100% {
    top: 0px;
    opacity: 1;
  }
`;

export const Container = styled.main`
  min-height: 100vh;

  display: flex;
  justify-content: space-around;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  background-color: #20212b;
  background-image: url(${homeBackground});
  background-repeat: no-repeat;
  background-position: center center;

  font-family: Rajdhani;
  color: #fff;

  section.infos {
    width: 38vw;
    max-width: 804px;
    height: 100vh;

    position: relative;

    animation-name: ${leftFromRightAnimation};
    animation-duration: 1.5s;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (max-width: 900px) {
      width: 90vw;
      height: auto;

      justify-content: center;
    }
  }
`;

export const InfoProject = styled.div`
  margin-bottom: 55px;

  animation-name: ${leftFromRightAnimation};
  animation-duration: 5s;

  div#title-container {
    display: flex;

    align-items: center;

    margin-bottom: 10px;

    img {
      background: white;
      border-radius: 50%;

      width: 6vw;
      height: 6vw;
      margin-right: 10px;
    }

    h1 {
      font-size: 5.11vw;
      font-weight: 400;
    }
  }

  p {
    font-size: 1.92vw;
  }

  @media (max-width: 900px) {
    div#title-container {
      margin-top: 20px;

      h1 {
        font-size: 10vw;
        font-weight: 400;
      }

      img {
        width: 10vw;
        height: 10vw;
      }
    }

    p {
      font-size: 4vw;
    }
  }
`;

export const Contacts = styled.div`
  width: 38vw;

  margin-bottom: 96px;

  h3 {
    font-size: 2.559vw;
    font-weight: 400;
  }

  div.contacts-container {
    display: grid;
    grid-template-columns: 1fr 1fr;

    div.contact-container {
      svg {
        font-size: 20px;

        margin-right: 10px;
      }

      a {
        text-decoration: none;
        font-size: 0.86vw;
        color: #fff;

        display: flex;
        align-items: center;

        @media (max-width: 1500px) {
          font-size: 16px;
        }

        @media (max-width: 1200px) {
          font-size: 12px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    width: 80vw;

    h3 {
      font-size: 5vw;
    }

    div.contacts-container {
      div.contact-container {
        svg {
          font-size: 20px;

          margin-right: 10px;
        }

        a {
          font-size: 2.7vw;
        }
      }
    }
  }
`;

export const CompetitionsContainer = styled.section`
  width: 40.4vw;
  max-width: 710px;
  height: fit-content;
  padding: 40px 20px;

  align-self: center;

  background: rgba(0, 0, 0, 0.44);
  border: 3px solid #ffffff;

  position: relative;
  animation: ${topFromBottomAnimation};
  animation-duration: 1.5s;

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

    &:last-child {
      padding: 0;
    }

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
      width: 9vw;
      max-width: 160px;

      &[alt='Ligue 1'] {
        width: 6vw;
      }
    }

    div.leagues-container {
      display: grid;
      grid-template-columns: repeat(3, 25%);
      justify-content: center;
      justify-items: center;
      align-items: center;
      column-gap: 12%;
      row-gap: 5%;
    }
  }

  @media (max-width: 900px) {
    width: 95vw;
    height: auto;
    margin-bottom: 30px;

    h1 {
      font-size: 5vw;
    }

    fieldset {
      legend {
        font-size: 24px;

        svg {
          font-size: 26px;

          margin-right: 10px;
        }
      }

      img {
        width: 23vw;
        max-width: 160px;

        &[alt='Ligue 1'] {
          width: 15vw;
        }
      }

      div.leagues-container {
        grid-template-columns: repeat(3, 25%);
        column-gap: 12%;
        row-gap: 5%;

        @media (max-width: 650px) {
          grid-template-columns: repeat(2, 50%);
          column-gap: 12%;
          row-gap: 10%;

          margin: 30px 0;
        }
      }
    }
  }
`;
