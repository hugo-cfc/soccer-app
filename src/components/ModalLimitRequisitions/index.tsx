import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

import { Container, HomeButton as StyledButton } from './style';

export const ModalLimitRequisitions: React.FC = () => {
  const elPortalButtonHome = document.getElementById('button-root')!;

  return ReactDOM.createPortal(
    <Container>
      <NavLink to="/">
        <StyledButton>
          <AiFillHome />
          FAFASFASF
        </StyledButton>
      </NavLink>
    </Container>,
    elPortalButtonHome,
  );
};

export default ModalLimitRequisitions;
