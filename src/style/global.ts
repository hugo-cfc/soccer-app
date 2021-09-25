import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
  }

  .App {
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }

  @font-face {
    font-family: 'LaLiga 15';
    src: url('CoreSansC-15Thin.eot');
    src: local('Core Sans C 15 Thin'), local('CoreSansC-15Thin'),
        url('CoreSansC-15Thin.eot?#iefix') format('embedded-opentype'),
        url('CoreSansC-15Thin.woff2') format('woff2'),
        url('CoreSansC-15Thin.woff') format('woff'),
        url('CoreSansC-15Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
      font-family: 'LaLiga 65';
      src: url('CoreSansC-65BoldIt.eot');
      src: local('Core Sans C 65 Bold Italic'), local('CoreSansC-65BoldIt'),
          url('CoreSansC-65BoldIt.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-65BoldIt.woff2') format('woff2'),
          url('CoreSansC-65BoldIt.woff') format('woff'),
          url('CoreSansC-65BoldIt.ttf') format('truetype');
      font-weight: bold;
      font-style: italic;
  }

  @font-face {
      font-family: 'LaLiga 25';
      src: url('CoreSansC-25ExtraLightIt.eot');
      src: local('Core Sans C 25 ExtraLight Italic'), local('CoreSansC-25ExtraLightIt'),
          url('CoreSansC-25ExtraLightIt.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-25ExtraLightIt.woff2') format('woff2'),
          url('CoreSansC-25ExtraLightIt.woff') format('woff'),
          url('CoreSansC-25ExtraLightIt.ttf') format('truetype');
      font-weight: 200;
      font-style: italic;
  }

  @font-face {
      font-family: 'LaLiga 65';
      src: url('CoreSansC-65Bold.eot');
      src: local('Core Sans C 65 Bold'), local('CoreSansC-65Bold'),
          url('CoreSansC-65Bold.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-65Bold.woff2') format('woff2'),
          url('CoreSansC-65Bold.woff') format('woff'),
          url('CoreSansC-65Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'LaLiga 35';
      src: url('CoreSansC-35LightIt.eot');
      src: local('Core Sans C 35 Light Italic'), local('CoreSansC-35LightIt'),
          url('CoreSansC-35LightIt.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-35LightIt.woff2') format('woff2'),
          url('CoreSansC-35LightIt.woff') format('woff'),
          url('CoreSansC-35LightIt.ttf') format('truetype');
      font-weight: 300;
      font-style: italic;
  }

  @font-face {
      font-family: 'LaLiga 55';
      src: url('CoreSansC-55Medium.eot');
      src: local('Core Sans C 55 Medium'), local('CoreSansC-55Medium'),
          url('CoreSansC-55Medium.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-55Medium.woff2') format('woff2'),
          url('CoreSansC-55Medium.woff') format('woff'),
          url('CoreSansC-55Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'LaLiga 85';
      src: url('CoreSansC-85HeavyIt.eot');
      src: local('Core Sans C 85 Heavy Italic'), local('CoreSansC-85HeavyIt'),
          url('CoreSansC-85HeavyIt.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-85HeavyIt.woff2') format('woff2'),
          url('CoreSansC-85HeavyIt.woff') format('woff'),
          url('CoreSansC-85HeavyIt.ttf') format('truetype');
      font-weight: 900;
      font-style: italic;
  }

  @font-face {
      font-family: 'LaLiga 15';
      src: url('CoreSansC-15ThinIt.eot');
      src: local('Core Sans C 15 Thin Italic'), local('CoreSansC-15ThinIt'),
          url('CoreSansC-15ThinIt.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-15ThinIt.woff2') format('woff2'),
          url('CoreSansC-15ThinIt.woff') format('woff'),
          url('CoreSansC-15ThinIt.ttf') format('truetype');
      font-weight: 100;
      font-style: italic;
  }

  @font-face {
      font-family: 'LaLiga 45';
      src: url('CoreSansC-45RegularIt.eot');
      src: local('Core Sans C 45 Regular Italic'), local('CoreSansC-45RegularIt'),
          url('CoreSansC-45RegularIt.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-45RegularIt.woff2') format('woff2'),
          url('CoreSansC-45RegularIt.woff') format('woff'),
          url('CoreSansC-45RegularIt.ttf') format('truetype');
      font-weight: normal;
      font-style: italic;
  }

  @font-face {
      font-family: 'LaLiga 25';
      src: url('CoreSansC-25ExtraLight.eot');
      src: local('Core Sans C 25 ExtraLight'), local('CoreSansC-25ExtraLight'),
          url('CoreSansC-25ExtraLight.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-25ExtraLight.woff2') format('woff2'),
          url('CoreSansC-25ExtraLight.woff') format('woff'),
          url('CoreSansC-25ExtraLight.ttf') format('truetype');
      font-weight: 200;
      font-style: normal;
  }

  @font-face {
      font-family: 'LaLiga 75';
      src: url('CoreSansC-75ExtraBoldIt.eot');
      src: local('Core Sans C 75 ExtraBold Italic'), local('CoreSansC-75ExtraBoldIt'),
          url('CoreSansC-75ExtraBoldIt.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-75ExtraBoldIt.woff2') format('woff2'),
          url('CoreSansC-75ExtraBoldIt.woff') format('woff'),
          url('CoreSansC-75ExtraBoldIt.ttf') format('truetype');
      font-weight: 800;
      font-style: italic;
  }

  @font-face {
      font-family: 'LaLiga 55';
      src: url('CoreSansC-55MediumIt.eot');
      src: local('Core Sans C 55 Medium Italic'), local('CoreSansC-55MediumIt'),
          url('CoreSansC-55MediumIt.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-55MediumIt.woff2') format('woff2'),
          url('CoreSansC-55MediumIt.woff') format('woff'),
          url('CoreSansC-55MediumIt.ttf') format('truetype');
      font-weight: 500;
      font-style: italic;
  }

  @font-face {
      font-family: 'LaLiga 95';
      src: url('CoreSansC-95Black.eot');
      src: local('Core Sans C 95 Black'), local('CoreSansC-95Black'),
          url('CoreSansC-95Black.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-95Black.woff2') format('woff2'),
          url('CoreSansC-95Black.woff') format('woff'),
          url('CoreSansC-95Black.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
  }

  @font-face {
      font-family: 'LaLiga 75';
      src: url('CoreSansC-75ExtraBold.eot');
      src: local('Core Sans C 75 ExtraBold'), local('CoreSansC-75ExtraBold'),
          url('CoreSansC-75ExtraBold.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-75ExtraBold.woff2') format('woff2'),
          url('CoreSansC-75ExtraBold.woff') format('woff'),
          url('CoreSansC-75ExtraBold.ttf') format('truetype');
      font-weight: 800;
      font-style: normal;
  }

  @font-face {
      font-family: 'LaLiga 95';
      src: url('CoreSansC-95BlackIt.eot');
      src: local('Core Sans C 95 Black Italic'), local('CoreSansC-95BlackIt'),
          url('CoreSansC-95BlackIt.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-95BlackIt.woff2') format('woff2'),
          url('CoreSansC-95BlackIt.woff') format('woff'),
          url('CoreSansC-95BlackIt.ttf') format('truetype');
      font-weight: 900;
      font-style: italic;
  }

  @font-face {
      font-family: 'LaLiga 35';
      src: url('CoreSansC-35Light.eot');
      src: local('Core Sans C 35 Light'), local('CoreSansC-35Light'),
          url('CoreSansC-35Light.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-35Light.woff2') format('woff2'),
          url('CoreSansC-35Light.woff') format('woff'),
          url('CoreSansC-35Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'LaLiga 85';
      src: url('CoreSansC-85Heavy.eot');
      src: local('Core Sans C 85 Heavy'), local('CoreSansC-85Heavy'),
          url('CoreSansC-85Heavy.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-85Heavy.woff2') format('woff2'),
          url('CoreSansC-85Heavy.woff') format('woff'),
          url('CoreSansC-85Heavy.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
  }

  @font-face {
      font-family: 'LaLiga 45';
      src: url('CoreSansC-45Regular.eot');
      src: local('Core Sans C 45 Regular'), local('CoreSansC-45Regular'),
          url('CoreSansC-45Regular.eot?#iefix') format('embedded-opentype'),
          url('CoreSansC-45Regular.woff2') format('woff2'),
          url('CoreSansC-45Regular.woff') format('woff'),
          url('CoreSansC-45Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }



`;
