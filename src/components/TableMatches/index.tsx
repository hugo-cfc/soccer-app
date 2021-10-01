import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { shade } from 'polished';
import { IoIosArrowBack } from 'react-icons/io';

import TeamData from '../../utils/TeamDataInterface';
import MatchData from '../../utils/MatchDataInterface';

import PremierMatchesHeader from './Components/Headers/PremierMatchesHeader';
import PremierContentMatch from './Components/MatchContents/PremierContentMatch';

import BrasileiraoMatchesHeader from './Components/Headers/BrasileiraoMatchesHeader';
import BrasileiraoContentMatch from './Components/MatchContents/BrasileiraoContentMatch';

import LaLigaMatchesHeader from './Components/Headers/LaLigaMatchesHeader';
import LaLigaContentMatch from './Components/MatchContents/LaLigaContentMatch';

import Ligue1MatchesHeader from './Components/Headers/Ligue1MatchesHeader';
import Ligue1ContentMatch from './Components/MatchContents/Ligue1ContentMatch';

import { MatchsContainer } from './style';

interface TableMatchesProps {
  onClickBack(): void;
  onClickNext(): void;
  data: Array<MatchData>;
  dataStandings: Array<TeamData>;
  currentMatchday: number;
  idCompetition: string;
}

const useStyle = makeStyles({
  premierLeague: {
    fontFamily: 'Poppins, sans-serif',

    '& div#sub-header': {
      backgroundColor: '#00f1ff',
      color: '#fff',
      fontSize: '30px',
      fontWeight: 500,

      display: 'flex',
      justifyContent: 'space-between',

      padding: '14px 10px',

      '& button': {
        color: '#fff',

        '&:hover path': {
          color: shade(0.2, '#fff'),
        },
      },
    },
  },

  ligue1: {
    background: '#091C3E',
    border: '1px solid #D0FB0C',

    '& div#sub-header': {
      backgroundColor: '#D0FB0C',
      color: '#091C3E',

      fontSize: '30px',

      display: 'flex',
      justifyContent: 'space-between',

      padding: '14px 10px',

      '& div#current-match-container': {
        paddingTop: '10px',

        fontFamily: "'Ligue 1 V1 Medium', sans-serif",
      },

      '& button': {
        color: '#091C3E',

        '&:hover path': {
          color: shade(0.2, '#091C3E'),
        },
      },
    },
  },

  laLiga: {
    background: 'rgba(0, 0, 0, 0.66)',
    borderRadius: '10px',

    fontFamily: 'Core Sans C 25, sans-serif',

    padding: '10px',

    '& div#sub-header': {
      backgroundColor: 'transparent',
      color: '#92DAEC',
      fontSize: '30px',
      fontWeight: 200,

      display: 'flex',
      justifyContent: 'space-between',

      padding: '14px 10px',

      '& button': {
        color: '#92DAEC',

        '&:hover path': {
          color: shade(0.2, '#92DAEC'),
        },
      },
    },
  },

  brasileirao: {
    backgroundColor: '#001959',

    '& div#headers-wrapper': {
      background: 'linear-gradient(178deg, #38ff00 47.83%, #001959 48.84%);',
      color: '#38ff00',
    },

    '& div#sub-header': {
      backgroundColor: 'transparent',

      '& button': {
        color: '#38ff00',

        '&:hover path': {
          color: shade(0.2, '#38ff00'),
        },
      },
    },
  },
});

export const TableMatches: React.FC<TableMatchesProps> = ({
  onClickBack,
  onClickNext,
  data,
  dataStandings,
  currentMatchday,
  idCompetition,
}) => {
  const classes = useStyle();

  return (
    <MatchsContainer
      className={clsx({
        [classes.brasileirao]: idCompetition === '2013',
        [classes.laLiga]: idCompetition === '2014',
        [classes.ligue1]: idCompetition === '2015',
        [classes.premierLeague]: idCompetition === '2021',
      })}
    >
      <div id="headers-wrapper">
        {
          {
            '2013': <BrasileiraoMatchesHeader />,
            '2014': <LaLigaMatchesHeader />,
            '2015': <Ligue1MatchesHeader />,
            '2021': <PremierMatchesHeader />,
          }[idCompetition]
        }

        <div id="sub-header">
          <button type="button" onClick={() => onClickBack()}>
            <IoIosArrowBack />
          </button>
          <div id="current-match-container">RODADA {currentMatchday}</div>
          <button type="button" onClick={() => onClickNext()}>
            <IoIosArrowBack />
          </button>
        </div>
      </div>

      {data.map((match: MatchData) => {
        const teamHomeLogo: TeamData[] = dataStandings.filter(
          (team: TeamData) => team.team?.id === match.homeTeam.id,
        );

        const teamAwayLogo: TeamData[] = dataStandings.filter(
          (team: TeamData) => team.team?.id === match.awayTeam.id,
        );

        return (
          <div key={match.id}>
            {
              {
                '2013': (
                  <BrasileiraoContentMatch
                    matchesData={match}
                    teamHomeLogo={teamHomeLogo}
                    teamAwayLogo={teamAwayLogo}
                  />
                ),
                '2014': (
                  <LaLigaContentMatch
                    matchesData={match}
                    teamHomeLogo={teamHomeLogo}
                    teamAwayLogo={teamAwayLogo}
                  />
                ),
                '2015': (
                  <Ligue1ContentMatch
                    matchesData={match}
                    teamHomeLogo={teamHomeLogo}
                    teamAwayLogo={teamAwayLogo}
                  />
                ),
                '2021': (
                  <PremierContentMatch
                    matchesData={match}
                    teamHomeLogo={teamHomeLogo}
                    teamAwayLogo={teamAwayLogo}
                  />
                ),
              }[idCompetition]
            }
          </div>
        );
      })}
    </MatchsContainer>
  );
};

export default TableMatches;
