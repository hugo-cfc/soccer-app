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
};

export default defaultTheme;
