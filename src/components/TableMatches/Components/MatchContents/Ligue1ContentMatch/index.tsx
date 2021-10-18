import DataMatchRegex from '../../../../../utils/DataMatchRegex';
import ContentMatchData from '../../../../../utils/ContentMatchInterface';

import Ligue1Logo from '../../../../../assets/images/competitionsLogo/ligue1LogoWrd.svg';
import { Container } from './style';
import NameTeamRegex from '../../../../../utils/NameTeamRegex';

export const Ligue1ContentMatch: React.FC<ContentMatchData> = ({
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
            alt={NameTeamRegex(matchesData.homeTeam.name)}
          />
        </div>

        <div className="score">
          <span>{NameTeamRegex(matchesData.homeTeam.name).slice(0, 3)}</span>
          <span className="score-number">
            {matchesData.score.fullTime.homeTeam}
          </span>
          <span>
            <img src={Ligue1Logo} alt="X" />
          </span>
          <span className="score-number">
            {matchesData.score.fullTime.awayTeam}
          </span>
          <span>{NameTeamRegex(matchesData.awayTeam.name).slice(0, 3)}</span>
        </div>

        <div className="emblem-container">
          <img
            src={
              teamAwayLogo[0]?.team.crestUrl ||
              'https://w7.pngwing.com/pngs/171/651/png-transparent-computer-icons-computer-security-interrogation-logo-shield-question.png'
            }
            alt={NameTeamRegex(matchesData.awayTeam.name)}
          />
        </div>
      </div>
    </Container>
  );
};

export default Ligue1ContentMatch;
