import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
        table: string;

        positions: {
          libertadores: string;
          playoffsLibertadores: string;
          drawdown: string;
        };
      };
    };
  }
}
