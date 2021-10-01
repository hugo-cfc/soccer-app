import DataMatchRegex from '../../../../../utils/DataMatchRegex';
import MatchData from '../../../../../utils/MatchDataInterface';

import Ligue1Logo from '../../../../../assets/images/competitionsLogo/ligue1LogoWrd.svg';

import { Container } from './style';

interface Ligue1ContentMatchProps {
  matchesData: MatchData;
  teamHomeLogo: Array<{
    team: {
      crestUrl: string;
    };
  }>;
  teamAwayLogo: Array<{
    team: {
      crestUrl: string;
    };
  }>;
}

export const Ligue1ContentMatch: React.FC<Ligue1ContentMatchProps> = ({
  matchesData,
  teamHomeLogo,
  teamAwayLogo,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <div className="match-header">
        <span>{DataMatchRegex(matchesData.utcDate)}</span>
      </div>
      <div className="match-content">
        <div className="emblem-container">
          <img
            src={teamHomeLogo[0]?.team?.crestUrl}
            alt={matchesData.homeTeam.name}
          />
        </div>

        <div className="score">
          <span>{matchesData.homeTeam.name.slice(0, 3)}</span>
          <span className="score-number">
            {matchesData.score.fullTime.homeTeam}
          </span>
          <span>
            <img src={Ligue1Logo} alt="X" />
          </span>
          <span className="score-number">
            {matchesData.score.fullTime.awayTeam}
          </span>
          <span>{matchesData.awayTeam.name.slice(0, 3)}</span>
        </div>

        <div className="emblem-container">
          <img
            src={teamAwayLogo[0]?.team.crestUrl}
            alt={matchesData.awayTeam.name}
          />
        </div>
      </div>
    </Container>
  );
};

export default Ligue1ContentMatch;
