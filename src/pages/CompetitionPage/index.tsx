import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import HomeButton from '../../components/HomeButton';
import ModalWarnings from '../../components/ModalWarnings';
import ModalErrorRequisition from '../../components/ModalErrorRequisition';

import PremierLogo from '../../assets/images/competitionsLogo/premierLogoPurple.svg';
import BrasileiraoLogo from '../../assets/images/competitionsLogo/logoBrasileirao.png';
import LaLigaLogo from '../../assets/images/competitionsLogo/laLigaLogoHeaderYellow.svg';
import Ligue1Logo from '../../assets/images/competitionsLogo/ligue1Logo.svg';
import BundesligaLogo from '../../assets/images/competitionsLogo/bundesligaLogo.svg';
import SerieATIM from '../../assets/images/competitionsLogo/serieALogo.png';
import Ball from '../../assets/icons/ball.png';

import Table from '../../components/Table';
import TableMatches from '../../components/TableMatches';

import { Container, LoadingContainer } from './style';

export const CompetitionPage: React.FC = () => {
  const [standings, setStandings] = useState([]);
  const [matches, setMatches] = useState([]);
  const [currentMatchday, setCurrentMatchday] = useState<number>(0);
  const [isErrorRequest, setIsErrorRequest] = useState(false);

  const { id } = useParams<{ id: string }>();

  const urlCompetitions = `/v2/competitions/${id}/standings`;
  const isValidId =
    id === '2002' ||
    id === '2013' ||
    id === '2014' ||
    id === '2015' ||
    id === '2019' ||
    id === '2021';

  useEffect(() => {
    if (!isValidId) {
      setIsErrorRequest(true);
      return;
    }

    (async () => {
      try {
        const { data } = await api.get(urlCompetitions);
        setCurrentMatchday(data.season.currentMatchday);
        setStandings(data.standings[0].table);
      } catch (error) {
        setIsErrorRequest(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (!currentMatchday) return;

    api
      .get(`v2/competitions/${id}/matches?matchday=${currentMatchday}`)
      .then(response => setMatches(response.data.matches))
      .catch(() => {
        setIsErrorRequest(true);
      });
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
                  '2019': SerieATIM,
                  '2021': PremierLogo,
                }[id]
              }
              alt={
                {
                  '2002': 'Bundesliga',
                  '2013': 'Brasileirao',
                  '2014': 'La Liga',
                  '2015': 'Ligue 1',
                  '2019': 'Série A TIM',
                  '2021': 'Premier League',
                }[id]
              }
            />

            {id === '2013' && <h1>Brasileirão - 2021</h1>}
            {id === '2019' && <h1>Série A TIM</h1>}
          </header>

          <main>
            <Table data={standings} idCompetition={id} />

            <TableMatches
              data={matches}
              dataStandings={standings}
              currentMatchday={currentMatchday}
              idCompetition={id}
              onClickBack={() => {
                if (currentMatchday === 1) return;
                setCurrentMatchday(prevState => prevState! - 1);
              }}
              onClickNext={() => {
                if (id === '2002' && currentMatchday === 34) return;
                if (currentMatchday === 38) return;
                setCurrentMatchday(prevState => prevState! + 1);
              }}
            />

            {isErrorRequest && <ModalErrorRequisition isValidId={isValidId} />}
            <HomeButton />
            <ModalWarnings />
          </main>
        </Container>
      ) : (
        <LoadingContainer idCompetition={id}>
          {!isErrorRequest ? (
            <div className="background">
              <img src={Ball} className="loader" alt="Soccer App" />
            </div>
          ) : (
            <ModalErrorRequisition isValidId={isValidId} />
          )}
        </LoadingContainer>
      )}
    </>
  );
};

export default CompetitionPage;
