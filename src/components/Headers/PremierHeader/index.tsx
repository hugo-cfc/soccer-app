import PremierLogoHeader from '../../../assets/images/premierLogoPurple.svg';

import { Container } from './style';

export const PremierHeader: React.FC = () => {
  return (
    <Container>
      <img src={PremierLogoHeader} alt="Premier League" />
      <h1>PREMIER LEAGUE 2021-22</h1>
    </Container>
  );
};

export default PremierHeader;
