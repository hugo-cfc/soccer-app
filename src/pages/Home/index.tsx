import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';

import laLigaLogo from '../../assets/images/competitionsLogo/laligaLogo.svg';
import premierLogo from '../../assets/images/competitionsLogo/premierLogoPurpleWhite.svg';
import ligue1Logo from '../../assets/images/competitionsLogo/ligue1LogoHome.svg';
import bundesligaLogo from '../../assets/images/competitionsLogo/bundesligaLogo.svg';
import serieALogo from '../../assets/images/competitionsLogo/serieALogo.png';
import brasileiraoLogo from '../../assets/images/competitionsLogo/logoBrasileirao.png';
import ballImage from '../../assets/icons/ball.png';

import {
  Container,
  InfoProject,
  Contacts,
  CompetitionsContainer,
} from './style';

export const Home: React.FC = () => {
  const handleHoverCompetition = useCallback(() => {
    if (isMobile) return;

    new Audio('/hoverSound.mp3').play();
  }, []);

  return (
    <Container>
      <section className="infos">
        <InfoProject>
          <div id="title-container">
            <img src={ballImage} alt="Soccer App" />

            <h1>Soccer App</h1>
          </div>

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
                <AiOutlineWhatsApp />
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
            <NavLink
              to="/competition/2014"
              onMouseOver={handleHoverCompetition}
            >
              <img src={laLigaLogo} alt="La Liga" />
            </NavLink>
            <NavLink
              to="/competition/2021"
              onMouseOver={handleHoverCompetition}
            >
              <img src={premierLogo} alt="Premier League" />
            </NavLink>
            <NavLink
              to="/competition/2015"
              onMouseOver={handleHoverCompetition}
            >
              <img src={ligue1Logo} alt="Ligue 1" />
            </NavLink>
            <NavLink
              to="/competition/2002"
              onMouseOver={handleHoverCompetition}
            >
              <img src={bundesligaLogo} alt="Bundesliga" />
            </NavLink>
            <NavLink
              to="/competition/2019"
              onMouseOver={handleHoverCompetition}
            >
              <img src={serieALogo} alt="Serie A TIM" />
            </NavLink>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <BiWorld /> América
          </legend>

          <div className="leagues-container">
            <NavLink
              to="/competition/2013"
              onMouseOver={handleHoverCompetition}
            >
              <img src={brasileiraoLogo} alt="Brasileirão" />
            </NavLink>
          </div>
        </fieldset>
      </CompetitionsContainer>
    </Container>
  );
};

export default Home;
