import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  laliga: {
    texts: {
      primaryText: '#F4FCC8',
      secondaryText: '#92DAEC',
    },

    borders: {
      generalBorder: '#293544',
      headerBorder: '#293D44',
    },

    backgrounds: {
      primaryBackground: 'rgba(0, 0, 0, 0.66)',
      secondaryBackground: 'rgba(12, 27, 35, 0.66)',
      tertiaryBackground: 'rgba(12, 18, 21, 0.66)',
      headerBackground: '#000',
      scoreBackground: 'rgba(8, 14, 16, 0.66)',

      positions: {
        champions: '#323578',
        europaleague: '#7D4C9C',
        drawdown: '#C13C2D',
      },
    },
  },

  premier: {
    texts: {
      primaryText: '#fff',
    },

    backgrounds: {
      primaryBackground: '#E6E6E6',
      secondaryBackground: '#37043C',
      headerBackground:
        'linear-gradient(180deg, #FD005B 0%, #E90959 52.6%, #FD005B 100%);',

      positions: {
        champions: '#00FF7F',
        europaleague: '#00F1FF',
        drawdown: '#FD005B',
      },
    },
  },

  ligue1: {
    texts: {
      primaryText: '#fff',
    },

    backgrounds: {
      primaryColor: '#091C3E',
      secondaryColor: '#D0FB0C',
      transparentBackground: 'rgba(9, 28, 62, 0.89)',
      theaderBackground:
        'linear-gradient( 115deg, #ffffff 91.99%, rgba(255, 255, 255, 0) 91.99%)',

      theaderBackgroundShort:
        'linear-gradient(105deg, #ffffff 91.99%, rgba(255, 255, 255, 0) 91.99%)',

      positions: {
        playoffsChampions: '#07C26B',
        europaLeague: '#00F1FF',
        conferenceLeague: '#AC965A',
        playoffsDrawdown: '#F08712',
        drawdown: '#c13c2d',
      },
    },
  },

  brasileirao: {
    colors: {
      primary: '#001959',
      secondary: '#38FF00',
    },

    backgrounds: {
      headerBackground:
        'linear-gradient(178deg, #38ff00 62.82%, rgba(56, 255, 0, 0) 63.89%)',
      headerBackgroundTableMatches:
        'linear-gradient(178deg, #38ff00 47.83%, #001959 48.84%)',
      theaderBackground:
        'linear-gradient(178deg, #38ff00 58.11%, #001959 59.12%)',

      theaderBackgroundShort:
        'linear-gradient( 180deg, #38ff00 58.11%, #001959 59.12%)',
      table: '#fff',

      positions: {
        libertadores: '#07C26B',
        playoffsLibertadores: '#00F1FF',
        drawdown: '#c13c2d',
      },
    },
  },
};

export default defaultTheme;
