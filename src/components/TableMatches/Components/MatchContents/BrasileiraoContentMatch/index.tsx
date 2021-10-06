import DataMatchRegex from '../../../../../utils/DataMatchRegex';
import ContentMatchData from '../../../../../utils/ContentMatchInterface';

import { Container } from './style';

export const BrasileiraoContentMatch: React.FC<ContentMatchData> = ({
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
        <div className="team-container">
          <div className="team-info">
            <img
              src={teamHomeLogo[0]?.team?.crestUrl}
              alt={matchesData.homeTeam.name}
            />
            <span>{matchesData.homeTeam.name}</span>
          </div>
          <span>{matchesData.score.fullTime.homeTeam}</span>
        </div>

        <div className="team-container">
          <div className="team-info">
            <img
              src={teamAwayLogo[0]?.team.crestUrl}
              alt={matchesData.awayTeam.name}
            />
            <span>{matchesData.awayTeam.name}</span>
          </div>
          <span>{matchesData.score.fullTime.awayTeam}</span>
        </div>
      </div>
    </Container>
  );
};

export default BrasileiraoContentMatch;
