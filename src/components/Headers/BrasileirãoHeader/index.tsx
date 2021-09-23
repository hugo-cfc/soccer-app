import BrasileiraLogo from '../../../assets/images/logoBrasileirao.png';

import { Container } from './style';

export const BrasileirãoHeader: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={BrasileiraLogo} alt="Brasileirão" />
        <h1>Brasileirão - 2021</h1>
      </div>
    </Container>
  );
};

export default BrasileirãoHeader;
