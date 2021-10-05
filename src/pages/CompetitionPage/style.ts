import styled, { css } from 'styled-components';

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

export const Container = styled.div<ContainerProps>`
  min-height: 100vh;

  background-image: ${props => backgrounds[props.idCompetition]};

  background-color: #001959;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  main {
    display: flex;
    justify-content: space-around;
  }

  & > header {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 50px;
  }

  ${({ idCompetition }) =>
    idCompetition === '2002' &&
    css`
      & > header {
        padding: 10px 0;

        background: #c90e17;
        border-bottom: 3px solid #ffffff;

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
        background: linear-gradient(
          178deg,
          #38ff00 62.82%,
          rgba(56, 255, 0, 0) 63.89%
        );

        color: #001959;

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

        background: #000;
        border-bottom: 4px solid #293d44;
        color: #fff;

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

        background: #091c3e;
        border-bottom: 3px solid #d0fb0c;
        color: #fff;

        img {
          width: 230px;
        }
      }
    `};

  ${({ idCompetition }) =>
    idCompetition === '2021' &&
    css`
      & > header {
        height: 70px;

        background: linear-gradient(
          180deg,
          #fd005b 0%,
          #e90959 52.6%,
          #fd005b 100%
        );
        color: #fff;

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
