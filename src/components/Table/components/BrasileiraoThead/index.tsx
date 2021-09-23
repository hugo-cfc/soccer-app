import { Container } from './style';

export const BrasileiraoThead: React.FC = () => {
  return (
    <Container>
      <tr>
        <th className="emptyCell">P</th>
        <th className="emptyCell">Time</th>
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

export default BrasileiraoThead;
