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
              <a
                href="mailto: hugocfc98@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail />
                hugocfc98@gmail.com
              </a>
            </div>

            <div className="contact-container">
              <a
                href="https://github.com/hugo-cfc"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
                github.com/hugo-cfc
              </a>
            </div>
            <div className="contact-container">
              <a
                href="https://linkedin.com/in/hugo-cesar"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
                linkedin.com/in/hugo-cesar
              </a>
            </div>

            <div className="contact-container">
              <a href="tel:82988046265">
                <AiFillPhone />
                (82) 98804-6265
              </a>
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
            <NavLink to="/competition/2014">
              <img src={laLigaLogo} alt="La Liga" />
            </NavLink>
            <NavLink to="/competition/2021">
              <img src={premierLogo} alt="Premier League" />
            </NavLink>
            <img src={ligue1Logo} alt="Ligue 1" />
            <img src={bundesligaLogo} alt="Bundesliga" />
            <img src={serieALogo} alt="Serie A TIM" />
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <BiWorld /> América
          </legend>

          <div className="leagues-container">
            <NavLink to="/competition/2013">
              <img src={brasileiraoLogo} alt="Brasileirão" />
            </NavLink>
          </div>
        </fieldset>
      </CompetitionsContainer>
    </Container>
  );
};

export default Home;
