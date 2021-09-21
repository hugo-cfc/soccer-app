import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Roboto, sans-serif;
  }

  .App {
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }

  @font-face {
    font-family: "Premier";
    src: url("fonts/PremierSans.otf") format('opentype');
    src: url("fonts/PremierSans.ttf") format('truetype');
  }

`;
