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

  ${({ idCompetition }) =>
    idCompetition === '2014' &&
    css`
      main {
        header {
          padding: 10px 0;

          margin-bottom: 50px;

          background: #000;
          border-bottom: 4px solid #293d44;
          color: #fff;

          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 263px;
          }
        }
      }

      @media (max-width: 1570px) {
        main {
          flex-direction: column;
          justify-content: center;
          align-items: center;

          & > div:first-child {
            margin-bottom: 40px;
          }
        }
    `};

  @media (max-width: 1350px) {
    main {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > div:first-child {
        margin-bottom: 40px;
      }
    }
  }
`;
