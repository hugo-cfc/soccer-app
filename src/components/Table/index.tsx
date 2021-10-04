import { ReactNode } from 'react';

import clsx from 'clsx';

import TeamData from '../../utils/TeamDataInterface';

import laLigaLogo from '../../assets/images/competitionsLogo/laligaLogoBlue.svg';

import { Container } from './style';
import useStyle from './styleMaterial';

interface TableProps {
  data: Array<TeamData>;
  thead?: ReactNode;
  idCompetition: string;
}

export const Table: React.FC<TableProps> = ({ data, thead, idCompetition }) => {
  const classes = useStyle();

  return (
    <Container
      idCompetition={idCompetition}
      className={clsx('table-container', {
        [classes.bundesligaContainer]: idCompetition === '2002',
        [classes.brasileiraoContainer]: idCompetition === '2013',
        [classes.laLigaContainer]: idCompetition === '2014',
        [classes.ligue1Container]: idCompetition === '2015',
        [classes.premierContainer]: idCompetition === '2021',
      })}
    >
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
          {thead}
          <tbody>
            {data.map((team: TeamData) => (
              <tr
                key={team.team.id}
                className={clsx({
                  [classes.bundesliga]: idCompetition === '2002',
                  [classes.brasileirao]: idCompetition === '2013',
                  [classes.laLiga]: idCompetition === '2014',
                  [classes.ligue1]: idCompetition === '2015',
                  [classes.premierLeague]: idCompetition === '2021',
                })}
              >
                <td className="positionCell">
                  <div className="positionContainer">{team.position}</div>
                </td>
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
      </div>
    </Container>
  );
};

export default Table;
