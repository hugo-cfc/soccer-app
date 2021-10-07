import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

import YellowCardImage from '../../assets/images/yellowCard.jpg';

import { Container } from './style';

export const ModalLimitRequisitions: React.FC = () => {
  const elPortalButtonHome = document.getElementById('button-root')!;

  return ReactDOM.createPortal(
    <Container>
      <div id="requisition-limit-container">
        <img src={YellowCardImage} alt="Cartão Amarelo" />
        <div id="requisition-limit-content">
          <h1>Limite de requisições atingido, tente em instantes.</h1>
          <NavLink to="/">
            <AiFillHome />
            <h2>Voltar a tela inicial</h2>
          </NavLink>
        </div>
      </div>
    </Container>,
    elPortalButtonHome,
  );
};

export default ModalLimitRequisitions;
