import styled, { css } from 'styled-components';

import BackgroundPremierImg from '../../assets/images/backgrounds/backPremier.png';
import BackgroundBrasileiroImg from '../../assets/images/backgrounds/backBrasileiro.jpg';
import BackgroundLaLigaImg from '../../assets/images/backgrounds/backLaLiga.jpg';

interface backgroundSelectorProps {
  [competitionId: string]: string;
}

interface ContainerProps {
  idCompetition: string;
}

const backgrounds: backgroundSelectorProps = {
  '2021': `url(${BackgroundPremierImg})`,
  '2013': `url(${BackgroundBrasileiroImg})`,
  '2014': `url(${BackgroundLaLigaImg})`,
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
