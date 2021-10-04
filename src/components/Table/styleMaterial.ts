import { makeStyles } from '@material-ui/styles';
import { shade } from 'polished';

export const useStyle = makeStyles({
  premierContainer: {
    '& table': {
      whiteSpace: 'nowrap',
    },
  },

  premierLeague: {
    backgroundColor: '#e6e6e6',
    color: '#37043c',

    fontSize: '24px',

    '& td': {
      fontFamily: 'Poppins, sans-serif',

      '&:nth-child(-2n + 3)': {
        fontWeight: 'bold',
      },

      '&:nth-child(2n + 3)': {
        background: shade(0.2, '#e6e6e6'),
      },
    },

    '&:nth-child(-n + 4)': {
      backgroundColor: '#00ff7f',
      '& td:nth-child(2n + 3)': {
        background: shade(0.2, '#00ff7f'),
      },
      '& td': {
        color: '#fff',
      },
    },

    '&:nth-child(5)': {
      backgroundColor: '#00f1ff',

      '& td:nth-child(2n + 3)': {
        background: shade(0.2, '#00f1ff'),
      },

      '& td': {
        color: '#fff',
      },
    },

    '&:nth-child(n + 18)': {
      backgroundColor: '#fd005b',

      '& td:nth-child(2n + 3)': {
        background: shade(0.2, '#fd005b'),
      },

      '& td': {
        color: '#fff',
      },
    },
  },

  laLiga: {
    background: 'rgba(0, 0, 0, 0.66)',
    borderRadius: '10px',
    color: '#92DAEC',

    fontSize: '24px',
    whiteSpace: 'nowrap',

    fontFamily: "'Core Sans C 25', sans-serif",

    '& td': {
      padding: '0px 17px !important',

      borderRadius: '4px',

      background: 'rgba(12, 27, 35, 0.66)',

      '&:nth-child(-n + 2)': {
        color: '#F4FCC8',
      },

      '&:nth-child(2n + 4)': {
        background: 'rgba(12, 18, 21, 0.66)',
      },
    },

    '&:nth-child(-n + 4) td:first-child': {
      background: '#323578',
    },

    '&:nth-child(n + 5):nth-child(-n + 6) td:first-child': {
      background: '#7D4C9C;',
    },

    '&:nth-child(n + 7):nth-child(-n + 17) td:first-child': {
      border: '1px solid #293d44',
    },

    '&:nth-child(n + 18) td:first-child': {
      background: '#C13C2D;',
    },
  },

  laLigaContainer: {
    background: 'rgba(0, 0, 0, 0.66)',

    height: 'fit-content',
    padding: '17px',
    borderRadius: '10px',

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    '@media (max-width: 1110px)': {
      flexFlow: 'row wrap',
      justifyContent: 'center',
    },

    '& div.top-table': {
      color: '#F4FCC8',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& h1': {
        fontSize: '40px',
        fontWeight: 'normal',
        fontFamily: "'Core Sans C 25', sans-serif",
      },

      '& img': {
        width: '160px',
      },
    },

    '& div#table-container-inside': {
      '& table': {
        borderCollapse: 'separate',
        borderSpacing: '5px',

        marginBottom: 0,
      },
    },
  },

  brasileiraoContainer: {
    '& table': {
      margin: 0,
      whiteSpace: 'nowrap',
    },
  },

  brasileirao: {
    backgroundColor: '#fff',

    '& td': {
      fontFamily: 'Roboto, sans-serif',
      padding: '8px 10px',
      textAlign: 'center',

      '&:nth-child(-n + 3)': {
        fontWeight: 'bold',
      },

      '&.team-name-td': {
        textAlign: 'left',
      },

      fontSize: '22px',
      color: '#001959',

      '&.positionCell': {
        padding: '4px 8px',

        '& .positionContainer': {
          padding: '3px 5px',
        },
      },

      '&:nth-child(n + 2)': {
        borderBottom: '2px solid #38ff00',
      },
    },

    '&:nth-child(-n + 4)': {
      '& td': {
        '& .positionContainer': {
          backgroundColor: '#38ff00',
        },
      },
    },

    '&:nth-child(n + 5):nth-child(-n + 6)': {
      '& td': {
        '& .positionContainer': {
          backgroundColor: '#ffff0d',
        },
      },
    },

    '&:nth-child(n + 17)': {
      '& td': {
        '& .positionContainer': {
          backgroundColor: '#e90909',
        },
      },
    },

    '&:last-child': {
      '& td': {
        border: '0 !important',
      },
    },
  },

  ligue1: {
    background: 'rgba(9, 28, 62, 0.89)',

    fontSize: '24px',
    fontFamily: "'Ligue 1 V1 Light', sans-serif",
    fontWeight: 300,
    color: '#fff',

    '& td': {
      '&:first-child': {
        fontFamily: "'Ligue 1 V1 Bold', sans-serif",
      },

      '&:nth-child(3)': {
        color: '#D0FB0C',
      },
    },

    '&:nth-child(-n + 6)': {
      '& td:nth-child(2)': {
        fontFamily: "'Ligue 1 V1 Medium', sans-serif",
      },
    },

    '&:nth-child(-n + 2)': {
      '& td:nth-child(-n + 2)': {
        color: '#D0FB0C',
      },
    },

    '&:nth-child(3)': {
      borderBottom: '1px solid #D0FB0C',
      '& td:nth-child(-n + 2)': {
        color: '#07C26B',
      },
    },

    '&:nth-child(5)': {
      borderBottom: '1px solid #D0FB0C',
    },

    '&:nth-child(n + 4):nth-child(-n+5)': {
      '& td:nth-child(-n + 2)': {
        color: '#00F1FF',
      },
    },

    '&:nth-child(6)': {
      borderBottom: '1px solid #D0FB0C',
      '& td:nth-child(-n + 2)': {
        color: '#AC965A',
      },
    },

    '&:nth-child(18)': {
      borderTop: '1px solid #D0FB0C',

      '& td:nth-child(-n + 2)': {
        color: '#F08712',
      },
    },

    '&:nth-child(+n + 19)': {
      '& td:nth-child(-n + 2)': {
        color: '#C13C2D',
      },
    },
  },

  ligue1Container: {
    height: 'fit-content',

    '& div#table-container-inside': {
      border: '1px solid #D0FB0C',

      '& table': {
        marginBottom: 0,
        whiteSpace: 'nowrap',
      },
    },
  },

  bundesliga: {
    fontSize: '24px',
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: 'bold',
    color: '#313332',

    background: 'rgba(229, 229, 229, 0.63)',

    '&:nth-child(-n + 4)': {
      background: 'rgba(189, 46, 57, 0.6)',

      '& td': {
        color: '#fff',
      },
    },

    '&:nth-child(n+5):nth-child(-n+6)': {
      background: 'transparent',

      '& td': {
        color: '#fff',
      },
    },

    '&:nth-child(7)': {
      background: 'rgba(229, 229, 229, 0.8)',
    },

    '&:nth-child(16)': {
      background: 'rgba(222, 93, 102, 0.6)',

      '& td': {
        color: '#fff',
      },
    },

    '&:nth-child(+n + 17)': {
      background: 'rgba(189, 46, 57, 0.6)',

      '& td': {
        color: '#fff',
      },
    },
  },

  bundesligaContainer: {
    background: 'rgba(0, 0, 0, 0.49)',

    height: 'fit-content',

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    '@media (max-width: 1110px)': {
      flexFlow: 'row wrap',
      justifyContent: 'center',
    },

    '& div.top-table': {
      color: '#fff',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      padding: '25px 0',

      '& h1': {
        fontSize: '40px',
        fontFamily: "'Rajdhani', sans-serif",
      },
    },

    '& table': {
      margin: 0,
      whiteSpace: 'nowrap',
    },
  },
});

export default useStyle;
