import { useEffect, useState, useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import api from '../../services/api';

import PremierLogo from '../../assets/images/premierLogo.svg';
import ChelseaLogo from '../../assets/images/chelsea.png';

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
  const urlCompetitions = '/v2/competitions/2021/standings';
  const empty = '';
  const [table, setTable] = useState([]);
  const [matches, setMatches] = useState([]);
  const [currentMatchday, setCurrentMatchday] = useState<number>();

  useEffect(() => {
    (async () => {
      const { data } = await api.get(urlCompetitions);
      setCurrentMatchday(data.season.currentMatchday);
      setTable(data.standings[0].table);

      const dataMatches = await api.get(
        `v2/competitions/2021/matches?matchday=${data.season.currentMatchday}`,
      );
      setMatches(dataMatches.data.matches);
      console.log(dataMatches.data.matches);
    })();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>{empty}</th>
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
          <button type="button">
            <IoIosArrowBack />
          </button>
          <div>RODADA {currentMatchday}</div>
          <button type="button">
            <IoIosArrowBack />
          </button>
        </div>

        {matches.map((match: MatchData) => {
          return (
            <MatchContent>
              <div className="match-header">{match.utcDate}</div>
              <div className="match-content">
                <div className="emblem-container">
                  <img src={ChelseaLogo} alt="Chelsea FC" />
                </div>

                <div className="score">
                  <span>{match.homeTeam.name}</span>
                  <span>{match.score.fullTime.homeTeam}</span>
                  <span>X</span>
                  <span>{match.score.fullTime.awayTeam}</span>
                  <span>{match.awayTeam.name}</span>
                </div>

                <div className="emblem-container">
                  <img src={ChelseaLogo} alt="Chelsea FC" />
                </div>
              </div>
            </MatchContent>
          );
        })}

        <MatchContent>
          <div className="match-header">16/05/2021 - 16:30h</div>
          <div className="match-content">
            <div className="emblem-container">
              <img src={ChelseaLogo} alt="Chelsea FC" />
            </div>

            <div className="score">
              <span>Che</span>
              <span>1</span>
              <span>X</span>
              <span>0</span>
              <span>Che</span>
            </div>

            <div className="emblem-container">
              <img src={ChelseaLogo} alt="Chelsea FC" />
            </div>
          </div>
        </MatchContent>
      </MatchsContainer>
    </Container>
  );
};

export default TablePage;
