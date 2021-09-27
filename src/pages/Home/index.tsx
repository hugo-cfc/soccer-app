import { NavLink } from 'react-router-dom';
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
} from 'react-icons/ai';

import { Container, InfoProject, Contacts } from './style';

//   {<NavLink to="/competition/2013">
//     <h1>BRASILEIRO</h1>
//   </NavLink>
// </div>

// <div className="links">
//   <NavLink to="/competition/2021">
//     <h1>PREMIER</h1>
//   </NavLink>}
export const Home: React.FC = () => {
  return (
    <Container>
      <section>
        <InfoProject>
          <h1>Soccer App</h1>
          <p>
            Projeito feito por Hugo Cesar para pôr em prática todos os
            conhecimentos adquiridos até o momento e não tem fins lucrativos.
          </p>
        </InfoProject>
        <Contacts>
          <h3>Contatos do Desenvolvedor:</h3>
          <div className="contacts-container">
            <div className="contact-container">
              <AiOutlineMail /> hugocfc98@gmail.com
            </div>
            <div className="contact-container">
              <AiFillGithub /> github.com/hugo-cfc
            </div>
            <div className="contact-container">
              <AiFillLinkedin /> linkedin.com/in/hugo-cesar
            </div>
            <div className="contact-container">
              <AiFillPhone /> (82) 98804-6265
            </div>
          </div>
        </Contacts>
      </section>
    </Container>
  );
};

export default Home;
