import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    general: {
      text: string;
      backgroundContainer: string;
      backgroundModal: string;
      backgroundContainerWarnings: string;

      buttonHomeActive: {
        borderColor: string;
        background: string;
      };
    };

    laliga: {
      texts: {
        primaryText: string;
        secondaryText: string;
      };

      borders: {
        generalBorder: string;
        headerBorder: string;
      };

      backgrounds: {
        primaryBackground: string;
        secondaryBackground: string;
        tertiaryBackground: string;
        headerBackground: string;
        scoreBackground: string;

        positions: {
          champions: string;
          europaleague: string;
          drawdown: string;
        };
      };
    };

    premier: {
      texts: {
        primaryText: string;
      };

      backgrounds: {
        primaryBackground: string;
        secondaryBackground: string;
        headerBackground: string;

        positions: {
          champions: string;
          europaleague: string;
          drawdown: string;
        };
      };
    };

    ligue1: {
      texts: {
        primaryText: string;
      };

      backgrounds: {
        primaryColor: string;
        secondaryColor: string;
        transparentBackground: string;
        theaderBackground: string;
        theaderBackgroundShort: string;

        positions: {
          playoffsChampions: string;
          europaLeague: string;
          conferenceLeague: string;
          playoffsDrawdown: string;
          drawdown: string;
        };
      };
    };

    brasileirao: {
      colors: {
        primary: string;
        secondary: string;
      };

      backgrounds: {
        headerBackground: string;
        headerBackgroundTableMatches: string;
        theaderBackground: string;
        theaderBackgroundShort: string;
        contentMatchHeader: string;
        table: string;

        positions: {
          playoffsLibertadores: string;
          drawdown: string;
        };
      };
    };

    bundesliga: {
      colors: {
        primary: string;
        secondary: string;
      };

      backgrounds: {
        background: string;
        opaqueBackgroundDark: string;
        opaqueBackgroundLight: string;
        positions: {
          default: string;
          conferenceLeague: string;
          drawdownPlayoffs: string;
          championsDrawdown: string;
        };
      };
    };

    serieATim: {
      colors: {
        primary: string;
        secondary: string;
        tertiary: string;
      };

      text: string;

      background: string;
    };
  }
}
