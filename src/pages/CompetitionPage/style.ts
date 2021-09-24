import styled from 'styled-components';

import BackgroundPremierImg from '../../assets/images/backPremier.png';
import BackgroundBrasileiroImg from '../../assets/images/backBrasileiro.jpg';

export const Container = styled.div`
  min-height: 100vh;

  /* background-image: url(${BackgroundPremierImg}); */ // ==> Premier id: 2021
  background-image: url(${BackgroundBrasileiroImg}); // => Brasileirão id: 2013
  background-color: #001959; // => Brasileirão id: 2013
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  main {
    display: flex;
    justify-content: space-around;
  }
`;
