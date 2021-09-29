import LaLigaLogoHeader from '../../../assets/images/competitionsLogo/laLigaLogoHeaderYellow.svg';

import { Container } from './style';

export const LaLigaHeader: React.FC = () => {
  return (
    <Container>
      <img src={LaLigaLogoHeader} alt="La Liga" />
    </Container>
  );
};

export default LaLigaHeader;
