import styled, { css, keyframes } from 'styled-components';

import BackgroundPremierImg from '../../assets/images/backgrounds/backPremier.png';
import BackgroundBrasileiroImg from '../../assets/images/backgrounds/backBrasileiro.jpg';
import BackgroundLaLigaImg from '../../assets/images/backgrounds/backLaLiga.jpg';
import BackgroundLigue1Img from '../../assets/images/backgrounds/backLigue1.jpg';
import BackgroundBundesliga from '../../assets/images/backgrounds/bundesligaBack.png';

interface backgroundSelectorProps {
  [competitionId: string]: string;
}

interface ContainerProps {
  idCompetition: string;
}

const backgrounds: backgroundSelectorProps = {
  '2002': `url(${BackgroundBundesliga})`,
  '2013': `url(${BackgroundBrasileiroImg})`,
  '2014': `url(${BackgroundLaLigaImg})`,
  '2015': `url(${BackgroundLigue1Img})`,
  '2021': `url(${BackgroundPremierImg})`,
};

const loading = keyframes`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`;

export const Container = styled.div<ContainerProps>`
  min-height: 100vh;
  padding-bottom: 30px;

  background-image: ${props => backgrounds[props.idCompetition]};

  background-color: ${({ theme }) => theme.brasileirao.colors.primary};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  & > header {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 50px;
  }

  main {
    display: flex;
    justify-content: space-around;
  }

  ${({ idCompetition }) =>
    idCompetition === '2002' &&
    css`
      & > header {
        padding: 10px 0;

        background: ${({ theme }) => theme.bundesliga.colors.primary};
        border-bottom: 3px solid
          ${({ theme }) => theme.bundesliga.colors.secondary};

        img {
          width: 103px;
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2013' &&
    css`
      & > header {
        height: 120px;
        background: ${({ theme }) =>
          theme.brasileirao.backgrounds.headerBackground};

        color: ${({ theme }) => theme.brasileirao.colors.primary};

        padding-bottom: 35px;

        img {
          width: 73px;

          margin-right: 16px;
        }

        h1 {
          font-family: 'Roboto', sans-serif;
          font-weight: 900;
          font-size: 28px;
          text-transform: uppercase;
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2014' &&
    css`
      & > header {
        padding: 10px 0;

        background: ${({ theme }) => theme.laliga.backgrounds.headerBackground};
        border-bottom: 4px solid
          ${({ theme }) => theme.laliga.borders.headerBorder};

        img {
          width: 263px;
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2015' &&
    css`
      & > header {
        padding: 7px 0;

        background: ${({ theme }) => theme.ligue1.backgrounds.primaryColor};
        border-bottom: 3px solid
          ${({ theme }) => theme.ligue1.backgrounds.secondaryColor};

        img {
          width: 230px;
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2019' &&
    css`
      & > header {
        background: ${({ theme }) => theme.serieATim.colors.primary};
        border-bottom: 3px solid ${({ theme }) => theme.serieATim.text};

        padding: 10px;

        img {
          width: 44px;

          margin-right: 16px;
        }

        h1 {
          font-family: 'DIN Next Bold', sans-serif;
          font-weight: 900;
          font-size: 28px;
          text-transform: uppercase;

          color: ${({ theme }) => theme.serieATim.text};
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2021' &&
    css`
      & > header {
        height: 70px;

        background: ${({ theme }) =>
          theme.premier.backgrounds.headerBackground};

        img {
          width: 146px;
        }
      }
    `};

  @media (max-width: 1570px) {
    main {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > div:first-child {
        margin-bottom: 40px;
      }
    }
  }

  @media (max-width: 1350px) {
    main {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const LoadingContainer = styled.div<ContainerProps>`
  background-color: ${({ theme }) => theme.brasileirao.colors.primary};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-image: ${props => backgrounds[props.idCompetition]};

  height: 100vh;

  .background {
    width: 100vw;
    height: 100vh;

    background: ${({ theme }) => theme.general.backgroundModal};
    backdrop-filter: blur(7px);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    background: ${({ theme }) => theme.general.text};

    width: 120px;
    height: 120px;
    border-radius: 50%;

    -webkit-animation: ${loading} 2s linear infinite;
    animation: ${loading} 2s linear infinite;
  }
`;
