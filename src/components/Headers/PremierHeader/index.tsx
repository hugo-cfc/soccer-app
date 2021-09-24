import PremierLogoHeader from '../../../assets/images/premierLogoPurple.svg';

import { Container } from './style';

export const PremierHeader: React.FC = () => {
  return (
    <Container>
      <img src={PremierLogoHeader} alt="Premier League" />
    </Container>
  );
};

export default PremierHeader;
