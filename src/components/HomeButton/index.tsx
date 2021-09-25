import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import { Container, HomeButton as StyledButton } from './style';

export const HomeButton: React.FC = () => {
  const elPortalButtonHome = document.getElementById('button-root')!;

  return ReactDOM.createPortal(
    <Container>
      <NavLink to="/">
        <StyledButton>CASA</StyledButton>
      </NavLink>
    </Container>,
    elPortalButtonHome,
  );
};

export default HomeButton;
