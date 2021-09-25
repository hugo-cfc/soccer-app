import { NavLink } from 'react-router-dom';

import { Container, ContainerLinks } from './style';

export const Home: React.FC = () => {
  return (
    <Container>
      <ContainerLinks>
        <div className="links">
          <NavLink to="/competition/2013">
            <h1>BRASILEIRO</h1>
          </NavLink>
        </div>

        <div className="links">
          <NavLink to="/competition/2021">
            <h1>PREMIER</h1>
          </NavLink>
        </div>
      </ContainerLinks>
    </Container>
  );
};

export default Home;
