import DataMatchRegex from '../../../../../utils/DataMatchRegex';
import MatchData from '../../../../../utils/MatchDataInterface';

import { Container } from './style';

interface BundesligaContentMatchProps {
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

export const BundesligaContentMatch: React.FC<BundesligaContentMatchProps> = ({
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
            src={
              teamHomeLogo[0]?.team?.crestUrl ||
              'https://w7.pngwing.com/pngs/171/651/png-transparent-computer-icons-computer-security-interrogation-logo-shield-question.png'
            }
            alt={matchesData.homeTeam.name}
          />
        </div>

        <div className="score">
          <span>{matchesData.homeTeam.name.slice(0, 3)}</span>
          <span className="score-number">
            {matchesData.score.fullTime.homeTeam}
          </span>
          <span>X</span>
          <span className="score-number">
            {matchesData.score.fullTime.awayTeam}
          </span>
          <span>{matchesData.awayTeam.name.slice(0, 3)}</span>
        </div>

        <div className="emblem-container">
          <img
            src={
              teamAwayLogo[0]?.team.crestUrl ||
              'https://w7.pngwing.com/pngs/171/651/png-transparent-computer-icons-computer-security-interrogation-logo-shield-question.png'
            }
            alt={matchesData.awayTeam.name}
          />
        </div>
      </div>
    </Container>
  );
};

export default BundesligaContentMatch;
