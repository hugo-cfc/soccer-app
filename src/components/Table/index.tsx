import { useEffect, useState } from "react";

import api from "../../services/api";

interface TeamData {
  position: number;
  team: {
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

export const Table: React.FC = () => {
  const urlCompetitions = "/v2/competitions/2021/standings";
  const [table, setTable] = useState([]);

  useEffect(() => {
    api.get(urlCompetitions).then((response) => {
      setTable(response.data.standings[0].table);
    });
  }, []);

  return (
    <table>
      <tr>
        <th>Pº</th>
        <th colSpan={2}>Time</th>
        <th>P</th>
        <th>J</th>
        <th>V</th>
        <th>E</th>
        <th>D</th>
        <th>SG</th>
        <th>GP</th>
        <th>GC</th>
      </tr>
      {table.map((team: TeamData) => (
        <tr>
          <td>{team.position}</td>
          <td>
            <img src={team.team.crestUrl} alt={team.team.name} />
          </td>
          <td>
            <div>{team.team.name}</div>
          </td>
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
    </table>
  );
};

export default Table;
