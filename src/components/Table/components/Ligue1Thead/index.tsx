import { Container } from './style';

export const Ligue1Thead: React.FC = () => {
  return (
    <Container>
      <tr>
        <th colSpan={2}>CLASSIFICAÇÃO</th>
        <th>P</th>
        <th>J</th>
        <th>V</th>
        <th>E</th>
        <th>D</th>
        <th>SG</th>
        <th>GP</th>
        <th>GC</th>
      </tr>
    </Container>
  );
};

export default Ligue1Thead;
