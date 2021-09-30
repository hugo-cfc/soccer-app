import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import HomeButton from '../../components/HomeButton';
import PremierHeader from '../../components/Headers/PremierHeader';
import PremierThead from '../../components/Table/components/PremierThead';
import BrasileirãoHeader from '../../components/Headers/BrasileirãoHeader';
import BrasileiraoThead from '../../components/Table/components/BrasileiraoThead';
import LaLigaHeader from '../../components/Headers/LaLigaHeader';
import LaLigaThead from '../../components/Table/components/LaLigaThead';
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
      {
        {
          '2013': <BrasileirãoHeader />,
          '2021': <PremierHeader />,
          '2014': <LaLigaHeader />,
        }[id]
      }

      <main>
        <Table
          thead={
            {
              '2013': <BrasileiraoThead />,
              '2021': <PremierThead />,
              '2014': <LaLigaThead />,
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
