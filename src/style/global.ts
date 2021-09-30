import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Core Sans C 25', sans-serif !important;
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
`;
