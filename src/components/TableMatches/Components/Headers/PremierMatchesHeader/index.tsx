import PremierLogo from '../../../../../assets/images/premierLogo.svg';

import { Container } from './style';

export const PremierMatchesHeader: React.FC = () => {
  return (
    <Container>
      <img src={PremierLogo} alt="Premier League" />
    </Container>
  );
};

export default PremierMatchesHeader;
