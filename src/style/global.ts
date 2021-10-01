import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  .App {
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }

  @font-face {
    font-family: 'Core Sans C 25';
    font-style: normal;
    font-weight: 200;
    src: local('CoreSansC-25ExtraLight'), url('/fonts/CoreSansC-25ExtraLight.woff') format('woff');
  }

  @font-face {
    font-family: 'Ligue 1 V1 Light';
    font-style: normal;
    font-weight: 300;
    src: local('LigueV-Light'), url('/fonts/LigueV-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Ligue 1 V1 Medium';
    font-style: normal;
    font-weight: 500;
    src: local('LigueV-Medium'), url('/fonts/LigueV-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Ligue 1 V1 Bold';
    font-style: normal;
    font-weight: 500;
    src: local('LigueV-Bold'), url('/fonts/liguev-bold.woff') format('woff');
  }
`;
