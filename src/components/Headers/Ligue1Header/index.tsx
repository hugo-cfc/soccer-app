import Ligue1LogoHeader from '../../../assets/images/competitionsLogo/ligue1Logo.svg';

import { Container } from './style';

export const Ligue1Header: React.FC = () => {
  return (
    <Container>
      <img src={Ligue1LogoHeader} alt="Ligue1" />
    </Container>
  );
};

export default Ligue1Header;
