import DataMatchRegex from '../../../../../utils/DataMatchRegex';
import MatchData from '../../../../../utils/MatchDataInterface';

import { Container } from './style';

interface PremierContentMatchProps {
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

export const PremierContentMatch: React.FC<PremierContentMatchProps> = ({
  matchesData,
  teamHomeLogo,
  teamAwayLogo,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <div className="match-header">{DataMatchRegex(matchesData.utcDate)}</div>
      <div className="match-content">
        <div className="emblem-container">
          <img
            src={teamHomeLogo[0]?.team?.crestUrl}
            alt={matchesData.homeTeam.name}
          />
        </div>

        <div className="score">
          <span>{matchesData.homeTeam.name.slice(0, 3)}</span>
          <span>{matchesData.score.fullTime.homeTeam}</span>
          <span>X</span>
          <span>{matchesData.score.fullTime.awayTeam}</span>
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

export default PremierContentMatch;
