/* eslint-disable prettier/prettier */
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import HomeButton from '../../components/HomeButton';
import ModalWarnings from '../../components/ModalWarnings';
import ModalLimitRequisitions from '../../components/ModalLimitRequisitions';

import PremierLogo from '../../assets/images/competitionsLogo/premierLogoPurple.svg';
import BrasileiraoLogo from '../../assets/images/competitionsLogo/logoBrasileirao.png';
import LaLigaLogo from '../../assets/images/competitionsLogo/laLigaLogoHeaderYellow.svg';
import Ligue1Logo from '../../assets/images/competitionsLogo/ligue1Logo.svg';
import BundesligaLogo from '../../assets/images/competitionsLogo/bundesligaLogo.svg';
import Ball from '../../assets/icons/ball.png';

import Table from '../../components/Table';
import TableMatches from '../../components/TableMatches';

import { Container, LoadingContainer } from './style';

export const CompetitionPage: React.FC = () => {
  const [standings, setStandings] = useState([]);
  const [matches, setMatches] = useState([]);
  const [currentMatchday, setCurrentMatchday] = useState<number>(1);
  const [isExceededLimitRequests, setIsExceededLimitRequests] = useState(false);

  const { id } = useParams<{ id: string }>();

  const urlCompetitions = `/v2/competitions/${id}/standings`;
  const firstRender = useRef(1);

  useEffect(() => {
    (async () => {
      await api
        .get(urlCompetitions)
        .then(response => {
          setCurrentMatchday(response.data.season.currentMatchday);
          setStandings(response.data.standings[0].table);
        })
        .catch(() => {
          setIsExceededLimitRequests(true);
        });

      await api
        .get(`v2/competitions/${id}/matches?matchday=${currentMatchday}`)
        .then(response => setMatches(response.data.matches))
        .catch(() => {
          setIsExceededLimitRequests(true);
        });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (firstRender.current === 1 || firstRender.current === 2) {
        firstRender.current++;

        return;
      }

      await api
        .get(`v2/competitions/${id}/matches?matchday=${currentMatchday}`)
        .then(response => setMatches(response.data.matches))
        .catch(() => {
          setIsExceededLimitRequests(true);
        });
    })();
  }, [currentMatchday]);

  return (
    <>
      {standings.length > 0 && matches.length > 0 ? (
        <Container idCompetition={id}>
          <header>
            <img
              src={
                {
                  '2002': BundesligaLogo,
                  '2013': BrasileiraoLogo,
                  '2014': LaLigaLogo,
                  '2015': Ligue1Logo,
                  '2021': PremierLogo,
                }[id]
              }
              alt={
                {
                  '2002': 'Bundesliga',
                  '2013': 'Brasileirao',
                  '2014': 'La Liga',
                  '2015': 'Ligue 1',
                  '2021': 'Premier League',
                }[id]
              }
            />

            {id === '2013' && <h1>Brasileirão - 2021</h1>}
          </header>

          <main>
            <Table data={standings} idCompetition={id} />

            <TableMatches
              data={matches}
              dataStandings={standings}
              currentMatchday={currentMatchday}
              idCompetition={id}
              onClickBack={() => setCurrentMatchday(prevState => prevState - 1)}
              onClickNext={() => setCurrentMatchday(prevState => prevState + 1)}
            />

            {isExceededLimitRequests && <ModalLimitRequisitions />}
            <HomeButton />
            <ModalWarnings />
          </main>
        </Container>
      ) : (
        <LoadingContainer idCompetition={id}>
          {!isExceededLimitRequests ? (
            <div className="background">
              <img src={Ball} className="loader" alt="Soccer App" />
            </div>
          ) : (
            <ModalLimitRequisitions />
          )}
        </LoadingContainer>
      )}
    </>
  );
};

export default CompetitionPage;
