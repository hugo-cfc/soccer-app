import { useEffect, useState, useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import api from '../../services/api';

import Table from '../../components/Table';
import PremierThead from '../../components/Table/components/PremierThead';
import PremierHeader from '../../components/Headers/PremierHeader';
import BrasileiraoThead from '../../components/Table/components/BrasileiraoThead';
import BrasileirãoHeader from '../../components/Headers/BrasileirãoHeader';

import PremierLogo from '../../assets/images/premierLogo.svg';

import { Container, MatchContent, MatchsContainer } from './style';

interface TeamData {
  position: number;
  team: {
    id: number;
    name: string;
    crestUrl: string;
  };
  points: number;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

interface MatchData {
  id: string;
  homeTeam: {
    id: number;
    name: string;
  };
  awayTeam: {
    id: number;
    name: string;
  };
  score: {
    fullTime: {
      awayTeam: 1;
      homeTeam: 1;
    };
  };
  matchday: number;
  utcDate: string;
}

export const TablePage: React.FC = () => {
  const [standings, setStandings] = useState([]);
  const [matches, setMatches] = useState([]);
  const [currentMatchday, setCurrentMatchday] = useState<number>(1);

  const urlCompetitions = '/v2/competitions/2013/standings';
  const regexDate = /(^(\d{4})-(\d{2})-(\d{2}))T((\d{2}):(\d{2}):(\d{2}))Z$/gm;
  const firstRender = useRef(1);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(urlCompetitions);
      setCurrentMatchday(data.season.currentMatchday);
      setStandings(data.standings[0].table);

      const dataMatches = await api.get(
        `v2/competitions/2013/matches?matchday=${data.season.currentMatchday}`,
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
        `v2/competitions/2013/matches?matchday=${currentMatchday}`,
      );
      setMatches(dataMatches.data.matches);
    })();
  }, [currentMatchday]);

  return (
    <Container>
      <BrasileirãoHeader />

      <main>
        <Table thead={<BrasileiraoThead />} data={standings} />

        <MatchsContainer>
          <header>
            <img src={PremierLogo} alt="Premier League" />
          </header>

          <div id="sub-header">
            <button
              type="button"
              onClick={() => setCurrentMatchday(prevState => prevState - 1)}
            >
              <IoIosArrowBack />
            </button>
            <div>RODADA {currentMatchday}</div>
            <button
              type="button"
              onClick={() => setCurrentMatchday(prevState => prevState + 1)}
            >
              <IoIosArrowBack />
            </button>
          </div>

          {matches.map((match: MatchData) => {
            const teamHomeLogo: TeamData[] = standings.filter(
              (team: TeamData) => team.team?.id === match.homeTeam.id,
            );

            const teamAwayLogo: TeamData[] = standings.filter(
              (team: TeamData) => team.team?.id === match.awayTeam.id,
            );

            return (
              <MatchContent key={match.id}>
                <div className="match-header">
                  {match.utcDate.replace(regexDate, '$5 - $4/$3/$2')}
                </div>
                <div className="match-content">
                  <div className="emblem-container">
                    <img
                      src={teamHomeLogo[0]?.team?.crestUrl}
                      alt={match.homeTeam.name}
                    />
                  </div>

                  <div className="score">
                    <span>{match.homeTeam.name.slice(0, 3)}</span>
                    <span>{match.score.fullTime.homeTeam}</span>
                    <span>X</span>
                    <span>{match.score.fullTime.awayTeam}</span>
                    <span>{match.awayTeam.name.slice(0, 3)}</span>
                  </div>

                  <div className="emblem-container">
                    <img
                      src={teamAwayLogo[0]?.team.crestUrl}
                      alt={match.awayTeam.name}
                    />
                  </div>
                </div>
              </MatchContent>
            );
          })}
        </MatchsContainer>
      </main>
    </Container>
  );
};

export default TablePage;
