import { useEffect, useState, useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import api from '../../services/api';

import PremierLogo from '../../assets/images/premierLogo.svg';
import PremierLogoHeader from '../../assets/images/premierLogoPurple.svg';

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
  const [table, setTable] = useState([]);
  const [matches, setMatches] = useState([]);
  const [currentMatchday, setCurrentMatchday] = useState<number>(1);

  const urlCompetitions = '/v2/competitions/2021/standings';
  const firstRender = useRef(1);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(urlCompetitions);
      setCurrentMatchday(data.season.currentMatchday);
      setTable(data.standings[0].table);

      const dataMatches = await api.get(
        `v2/competitions/2021/matches?matchday=${data.season.currentMatchday}`,
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
        `v2/competitions/2021/matches?matchday=${currentMatchday}`,
      );
      setMatches(dataMatches.data.matches);
    })();
  }, [currentMatchday]);

  return (
    <Container>
      <header>
        <img src={PremierLogoHeader} alt="Premier League" />
        <h1>PREMIER LEAGUE 2021-22</h1>
      </header>

      <main>
        <table>
          <thead>
            <tr>
              <th id="emptyCell">P</th>
              <th>Time</th>
              <th>P</th>
              <th>J</th>
              <th>V</th>
              <th>E</th>
              <th>D</th>
              <th>SG</th>
              <th>GP</th>
              <th>GC</th>
            </tr>
          </thead>
          <tbody>
            {table.map((team: TeamData) => (
              <tr key={team.team.id}>
                <td>{team.position}</td>
                <td className="team-name-td">{team.team.name}</td>
                <td>{team.points}</td>
                <td>{team.playedGames}</td>
                <td>{team.won}</td>
                <td>{team.draw}</td>
                <td>{team.lost}</td>
                <td>{team.goalDifference}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
              </tr>
            ))}
          </tbody>
        </table>

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
            const teamHomeLogo: TeamData[] = table.filter(
              (team: TeamData) => team.team.id === match.homeTeam.id,
            );

            const teamAwayLogo: TeamData[] = table.filter(
              (team: TeamData) => team.team.id === match.awayTeam.id,
            );

            return (
              <MatchContent key={match.id}>
                <div className="match-header">{match.utcDate}</div>
                <div className="match-content">
                  <div className="emblem-container">
                    <img
                      src={teamHomeLogo[0].team.crestUrl}
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
                      src={teamAwayLogo[0].team.crestUrl}
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
