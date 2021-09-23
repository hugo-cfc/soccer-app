import { ReactNode } from 'react';
import TeamData from '../../utils/TeamDataInterface';

import { Container } from './style';

interface TableProps {
  data: Array<TeamData>;
  thead?: ReactNode;
}

export const Table: React.FC<TableProps> = ({ data, thead }) => {
  return (
    <Container>
      <table>
        {thead}
        <tbody>
          {data.map((team: TeamData) => (
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
    </Container>
  );
};

export default Table;
