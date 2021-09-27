import styled from 'styled-components';

import BackgroundPremierImg from '../../assets/images/backPremier.png';
import BackgroundBrasileiroImg from '../../assets/images/backBrasileiro.jpg';

interface backgroundSelectorProps {
  [competitionId: string]: string;
}

interface ContainerProps {
  idCompetition: string;
}

const backgrounds: backgroundSelectorProps = {
  '2021': `url(${BackgroundPremierImg})`,
  '2013': `url(${BackgroundBrasileiroImg})`,
};

export const Container = styled.div<ContainerProps>`
  min-height: 100vh;

  background-image: ${props => backgrounds[props.idCompetition]};

  background-color: #001959;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  main {
    display: flex;
    justify-content: space-around;
  }
`;
