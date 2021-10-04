import BundesligaLogo from '../../../../../assets/images/competitionsLogo/bundesligaLogo.svg';

import { Container } from './style';

export const BundesligaMatchesHeader: React.FC = () => {
  return (
    <Container>
      <img src={BundesligaLogo} alt="Bundesliga" />
    </Container>
  );
};

export default BundesligaMatchesHeader;
