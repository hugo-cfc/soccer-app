import DataMatchRegex from '../../../../../utils/DataMatchRegex';
import ContentMatchData from '../../../../../utils/ContentMatchInterface';

import { Container } from './style';

export const LaLigaMatch: React.FC<ContentMatchData> = ({
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
          <span className="name-team-span">
            {matchesData.homeTeam.name.slice(0, 3)}
          </span>
          <span className="score-span">
            {matchesData.score.fullTime.homeTeam}
          </span>
          <span className="score-span">
            {matchesData.score.fullTime.awayTeam}
          </span>
          <span className="name-team-span">
            {matchesData.awayTeam.name.slice(0, 3)}
          </span>
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

export default LaLigaMatch;
