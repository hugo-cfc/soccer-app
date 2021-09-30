import LaLigaLogo from '../../../../../assets/images/competitionsLogo/laLigaLogoHeaderYellow.svg';

import { Container } from './style';

export const LaLigaMatchesHeader: React.FC = () => {
  return (
    <Container>
      <img src={LaLigaLogo} alt="La Liga Santander" />
    </Container>
  );
};

export default LaLigaMatchesHeader;
