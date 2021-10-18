import TeamData from '../../utils/TeamDataInterface';
import NameTeamRegex from '../../utils/NameTeamRegex';

import laLigaLogo from '../../assets/images/competitionsLogo/laligaLogoBlue.svg';

import { Container } from './style';

interface TableProps {
  data: Array<TeamData>;
  idCompetition: string;
}

export const Table: React.FC<TableProps> = ({ data, idCompetition }) => {
  return (
    <Container idCompetition={idCompetition} className="table-container">
      {idCompetition === '2002' && (
        <div className="top-table">
          <h1>CLASSIFICAÇÃO</h1>
        </div>
      )}

      {idCompetition === '2014' && (
        <div className="top-table">
          <h1>CLASSIFICAÇÃO</h1>
          <img src={laLigaLogo} alt="LaLiga Santander" />
        </div>
      )}

      <div id="table-container-inside">
        <table>
          <thead>
            <tr>
              {idCompetition === '2002' && <th>P</th>}
              <th
                colSpan={idCompetition === '2002' ? 1 : 2}
                className="classification-name"
              >
                {idCompetition === '2002' && 'TIME'}

                {idCompetition === '2013' && (
                  <>
                    Classificação <b>2021</b>
                  </>
                )}

                {idCompetition === '2015' && 'CLASSIFICAÇÃO'}

                {idCompetition === '2021' && 'TIME'}
              </th>
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
            {data.map((team: TeamData) => (
              <tr key={team.team.id}>
                <td className="positionCell">
                  <div className="positionContainer">{team.position}</div>
                </td>
                <td className="team-name-td">
                  {NameTeamRegex(team.team.name)}
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
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Table;
