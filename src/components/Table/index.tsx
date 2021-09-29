import { ReactNode } from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { shade } from 'polished';

import TeamData from '../../utils/TeamDataInterface';

import { Container } from './style';

interface TableProps {
  data: Array<TeamData>;
  thead?: ReactNode;
  idCompetition: string;
}

const useStyle = makeStyles({
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

    '& td': {
      fontFamily: 'Poppins, sans-serif',

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

    '&:nth-child(n + 18) td:first-child': {
      background: '#C13C2D;',
    },
  },

  laLigaContainer: {
    background: 'rgba(0, 0, 0, 0.66)',

    padding: '17px',
    borderRadius: '10px',

    '& div#table-container-inside table': {
      borderCollapse: 'separate',
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
});

export const Table: React.FC<TableProps> = ({ data, thead, idCompetition }) => {
  const classes = useStyle();

  return (
    <Container
      className={clsx('table-container', {
        [classes.laLigaContainer]: idCompetition === '2014',
      })}
    >
      <div id="table-container-inside">
        <table>
          {thead}
          <tbody>
            {data.map((team: TeamData) => (
              <tr
                key={team.team.id}
                className={clsx({
                  [classes.laLiga]: idCompetition === '2014',
                  [classes.premierLeague]: idCompetition === '2021',
                  [classes.brasileirao]: idCompetition === '2013',
                })}
              >
                <td className="positionCell">
                  <div className="positionContainer">{team.position}</div>
                </td>
                <td className="team-name-td">{team.team.name}</td>
                <td>{team.points}</td>
                <td>{team.playedGames}</td>
                <td>{team.won}</td>
                <td>{team.draw}</td>
                <td>{team.lost}</td>
                <td>{team.goalDifference}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Table;
