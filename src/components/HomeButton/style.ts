import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const bottomFromTopAnimation = keyframes`
  0% {
    bottom: -200px;
    opacity: 0.5;
  }

  100% {
    bottom: 30px;
    opacity: 1;
  }
`;

export const Container = styled.div`
  height: 100vh;

  position: absolute;
  left: 0;
  top: 0;
`;

export const HomeButton = styled.button`
  position: fixed;
  left: 10px;
  bottom: 30px;

  border-radius: 50%;
  border: 3px solid #fff;

  width: 100px;
  height: 100px;

  background-color: rgba(0, 0, 0, 0.44);
  color: #fff;

  font-size: 40px;

  animation-name: ${bottomFromTopAnimation};
  animation-duration: 2s;

  transition: all 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    border: 3px solid #3b3b3b;
    background: ${shade(0.2, '#e6e6e6')};
  }
`;
