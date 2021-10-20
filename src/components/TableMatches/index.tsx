import { IoIosArrowBack } from 'react-icons/io';

import TeamData from '../../utils/TeamDataInterface';
import MatchData from '../../utils/MatchDataInterface';

import PremierLogo from '../../assets/images/competitionsLogo/premierLogo.svg';
import PremierContentMatch from './Components/MatchContents/PremierContentMatch';

import BrasileiraoContentMatch from './Components/MatchContents/BrasileiraoContentMatch';

import LaLigaLogo from '../../assets/images/competitionsLogo/laLigaLogoHeaderYellow.svg';
import LaLigaContentMatch from './Components/MatchContents/LaLigaContentMatch';

import Ligue1Logo from '../../assets/images/competitionsLogo/ligue1Logo.svg';
import Ligue1ContentMatch from './Components/MatchContents/Ligue1ContentMatch';

import BundesligaLogo from '../../assets/images/competitionsLogo/bundesligaLogo.svg';
import BundesligaContentMatch from './Components/MatchContents/BundesligaContentMatch';

import SerieALogo from '../../assets/images/competitionsLogo/serieALogo.png';
import SerieAContentMatch from './Components/MatchContents/SerieAContentMatch';

import { MatchesContainer } from './style';

interface TableMatchesProps {
  onClickBack(): void;
  onClickNext(): void;
  data: Array<MatchData>;
  dataStandings: Array<TeamData>;
  currentMatchday: number | undefined;
  idCompetition: string;
}

export const TableMatches: React.FC<TableMatchesProps> = ({
  onClickBack,
  onClickNext,
  data,
  dataStandings,
  currentMatchday,
  idCompetition,
}) => {
  return (
    <MatchesContainer idCompetition={idCompetition}>
      <div id="headers-wrapper">
        <div id="header-table-matches">
          <img
            src={
              {
                '2002': BundesligaLogo,
                '2014': LaLigaLogo,
                '2015': Ligue1Logo,
                '2019': SerieALogo,
                '2021': PremierLogo,
              }[idCompetition]
            }
            alt={
              {
                '2002': 'Bundesliga',
                '2014': 'La Liga Santander',
                '2015': 'Ligue 1',
                '2019': 'Série A TIM',
                '2021': 'Premier League',
              }[idCompetition]
            }
          />
          {idCompetition === '2013' && 'JOGOS'}
        </div>

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
                '2002': (
                  <BundesligaContentMatch
                    matchesData={match}
                    teamHomeLogo={teamHomeLogo}
                    teamAwayLogo={teamAwayLogo}
                  />
                ),
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
                '2019': (
                  <SerieAContentMatch
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
    </MatchesContainer>
  );
};

export default TableMatches;
