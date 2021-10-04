import BundesligaLogoHeader from '../../../assets/images/competitionsLogo/bundesligaLogo.svg';

import { Container } from './style';

export const BundesligaHeader: React.FC = () => {
  return (
    <Container>
      <img src={BundesligaLogoHeader} alt="Bundesliga" />
    </Container>
  );
};

export default BundesligaHeader;
