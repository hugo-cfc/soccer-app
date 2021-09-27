import { NavLink } from 'react-router-dom';
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
} from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';

import laLigaLogo from '../../assets/images/competitionsLogo/laligaLogo.svg';
import premierLogo from '../../assets/images/competitionsLogo/premierLogoPurpleWhite.svg';
import ligue1Logo from '../../assets/images/competitionsLogo/ligue1Logo.png';
import bundesligaLogo from '../../assets/images/competitionsLogo/bundesligaLogo.svg';
import serieALogo from '../../assets/images/competitionsLogo/serieALogo.svg';
import brasileiraoLogo from '../../assets/images/competitionsLogo/logoBrasileirao.png';

import {
  Container,
  InfoProject,
  Contacts,
  CompetitionsContainer,
} from './style';

//   {
//     <h1>BRASILEIRO</h1>
//   </NavLink>
// </div>

export const Home: React.FC = () => {
  return (
    <Container>
      <section className="infos">
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
              <AiOutlineMail />

              <a
                href="mailto: hugocfc98@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                hugocfc98@gmail.com
              </a>
            </div>

            <div className="contact-container">
              <AiFillGithub />

              <a
                href="https://github.com/hugo-cfc"
                target="_blank"
                rel="noreferrer"
              >
                github.com/hugo-cfc
              </a>
            </div>
            <div className="contact-container">
              <AiFillLinkedin />

              <a
                href="https://linkedin.com/in/hugo-cesar"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/hugo-cesar
              </a>
            </div>

            <div className="contact-container">
              <AiFillPhone /> <a href="tel:82988046265">(82) 98804-6265</a>
            </div>
          </div>
        </Contacts>
      </section>

      <CompetitionsContainer>
        <h1>Escolha o campeonato</h1>
        <fieldset>
          <legend>
            <BiWorld /> Europa
          </legend>
          <div className="leagues-container">
            <img src={laLigaLogo} alt="" />
            <NavLink to="/competition/2021">
              <img src={premierLogo} alt="" />
            </NavLink>
            <img src={ligue1Logo} alt="" />
            <img src={bundesligaLogo} alt="" />
            <img src={serieALogo} alt="" />
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <BiWorld /> América
          </legend>
          <NavLink to="/competition/2013">
            <img src={brasileiraoLogo} alt="" />
          </NavLink>
        </fieldset>
      </CompetitionsContainer>
    </Container>
  );
};

export default Home;
