import DataMatchRegex from '../../../../../utils/DataMatchRegex';
import ContentMatchData from '../../../../../utils/ContentMatchInterface';

import { Container } from './style';
import NameTeamRegex from '../../../../../utils/NameTeamRegex';

export const PremierContentMatch: React.FC<ContentMatchData> = ({
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
            alt={NameTeamRegex(matchesData.homeTeam.name)}
          />
        </div>

        <div className="score">
          <span>{NameTeamRegex(matchesData.homeTeam.name).slice(0, 3)}</span>
          <span>{matchesData.score.fullTime.homeTeam}</span>
          <span>X</span>
          <span>{matchesData.score.fullTime.awayTeam}</span>
          <span>{NameTeamRegex(matchesData.awayTeam.name).slice(0, 3)}</span>
        </div>

        <div className="emblem-container">
          <img
            src={teamAwayLogo[0]?.team.crestUrl}
            alt={NameTeamRegex(matchesData.awayTeam.name)}
          />
        </div>
      </div>
    </Container>
  );
};

export default PremierContentMatch;
