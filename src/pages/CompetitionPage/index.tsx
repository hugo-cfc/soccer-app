import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import HomeButton from '../../components/HomeButton';

import PremierThead from '../../components/Table/components/PremierThead';
import PremierLogo from '../../assets/images/competitionsLogo/premierLogoPurple.svg';

import BrasileiraoThead from '../../components/Table/components/BrasileiraoThead';
import BrasileiraoLogo from '../../assets/images/competitionsLogo/logoBrasileirao.png';

import LaLigaThead from '../../components/Table/components/LaLigaThead';
import LaLigaLogo from '../../assets/images/competitionsLogo/laLigaLogoHeaderYellow.svg';

import Ligue1Thead from '../../components/Table/components/Ligue1Thead';
import Ligue1Logo from '../../assets/images/competitionsLogo/ligue1Logo.svg';

import BundesligaThead from '../../components/Table/components/BundesligaThead';
import BundesligaLogo from '../../assets/images/competitionsLogo/bundesligaLogo.svg';

import Table from '../../components/Table';
import TableMatches from '../../components/TableMatches';

import { Container } from './style';

export const CompetitionPage: React.FC = () => {
  const [standings, setStandings] = useState([]);
  const [matches, setMatches] = useState([]);
  const [currentMatchday, setCurrentMatchday] = useState<number>(1);

  const { id } = useParams<{ id: string }>();

  const urlCompetitions = `/v2/competitions/${id}/standings`;
  const firstRender = useRef(1);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(urlCompetitions);
      setCurrentMatchday(data.season.currentMatchday);
      setStandings(data.standings[0].table);

      const dataMatches = await api.get(
        `v2/competitions/${id}/matches?matchday=${data.season.currentMatchday}`,
      );
      setMatches(dataMatches.data.matches);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (firstRender.current === 1 || firstRender.current === 2) {
        firstRender.current++;

        return;
      }

      const dataMatches = await api.get(
        `v2/competitions/${id}/matches?matchday=${currentMatchday}`,
      );
      setMatches(dataMatches.data.matches);
    })();
  }, [currentMatchday]);

  return (
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
        <Table
          thead={
            {
              '2002': <BundesligaThead />,
              '2013': <BrasileiraoThead />,
              '2014': <LaLigaThead />,
              '2015': <Ligue1Thead />,
              '2021': <PremierThead />,
            }[id]
          }
          data={standings}
          idCompetition={id}
        />

        <TableMatches
          data={matches}
          dataStandings={standings}
          currentMatchday={currentMatchday}
          idCompetition={id}
          onClickBack={() => setCurrentMatchday(prevState => prevState - 1)}
          onClickNext={() => setCurrentMatchday(prevState => prevState + 1)}
        />

        <HomeButton />
      </main>
    </Container>
  );
};

export default CompetitionPage;
