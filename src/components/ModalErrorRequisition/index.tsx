import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

import YellowCardImage from '../../assets/images/yellowCard.jpg';
import RedCardImage from '../../assets/images/redCard.jpg';

import { Container } from './style';

interface ModalErrorRequisitionProps {
  isValidId: boolean;
}

export const ModalErrorRequisition: React.FC<ModalErrorRequisitionProps> = ({
  isValidId,
}) => {
  const elPortalButtonHome = document.getElementById('button-root')!;

  return ReactDOM.createPortal(
    <Container>
      <div id="requisition-error-container">
        <img
          src={!isValidId ? RedCardImage : YellowCardImage}
          alt={!isValidId ? 'Cartão Vermelho' : 'Cartão Amarelo'}
        />
        <div id="requisition-error-content">
          <h1>
            {!isValidId
              ? 'ID Inválido!'
              : 'Limite de requisições atingido, tente em instantes.'}
          </h1>
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

export default ModalErrorRequisition;
