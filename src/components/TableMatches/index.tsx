import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { shade } from 'polished';
import { IoIosArrowBack } from 'react-icons/io';
import TeamData from '../../utils/TeamDataInterface';
import MatchData from '../../utils/MatchDataInterface';

import PremierMatchesHeader from './Components/Headers/PremierMatchesHeader';
import BrasileiraoMatchesHeader from './Components/Headers/BrasileiraoMatchesHeader';

import { MatchContent, MatchsContainer } from './style';

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
  const regexDate = /(^(\d{4})-(\d{2})-(\d{2}))T((\d{2}):(\d{2}):(\d{2}))Z$/gm;
  const classes = useStyle();

  return (
    <MatchsContainer
      className={clsx({
        [classes.premierLeague]: idCompetition === '2021',
        [classes.brasileirao]: idCompetition === '2013',
      })}
    >
      <div id="headers-wrapper">
        {
          {
            '2013': (
              <BrasileiraoMatchesHeader>
                <div id="sub-header">
                  <button type="button" onClick={() => onClickBack()}>
                    <IoIosArrowBack />
                  </button>
                  <div>RODADA {currentMatchday}</div>
                  <button type="button" onClick={() => onClickNext()}>
                    <IoIosArrowBack />
                  </button>
                </div>
              </BrasileiraoMatchesHeader>
            ),
            '2021': <PremierMatchesHeader />,
          }[idCompetition]
        }

        <div id="sub-header">
          <button type="button" onClick={() => onClickBack()}>
            <IoIosArrowBack />
          </button>
          <div>RODADA {currentMatchday}</div>
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
          <MatchContent key={match.id}>
            <div className="match-header">
              {match.utcDate.replace(regexDate, '$5 - $4/$3/$2')}
            </div>
            <div className="match-content">
              <div className="emblem-container">
                <img
                  src={teamHomeLogo[0]?.team?.crestUrl}
                  alt={match.homeTeam.name}
                />
              </div>

              <div className="score">
                <span>{match.homeTeam.name.slice(0, 3)}</span>
                <span>{match.score.fullTime.homeTeam}</span>
                <span>X</span>
                <span>{match.score.fullTime.awayTeam}</span>
                <span>{match.awayTeam.name.slice(0, 3)}</span>
              </div>

              <div className="emblem-container">
                <img
                  src={teamAwayLogo[0]?.team.crestUrl}
                  alt={match.awayTeam.name}
                />
              </div>
            </div>
          </MatchContent>
        );
      })}
    </MatchsContainer>
  );
};

export default TableMatches;
