import ligue1Logo from '../../../../../assets/images/competitionsLogo/ligue1Logo.svg';

import { Container } from './style';

export const Ligue1MatchesHeader: React.FC = () => {
  return (
    <Container>
      <img src={ligue1Logo} alt="Premier League" />
    </Container>
  );
};

export default Ligue1MatchesHeader;
