import { Container } from './style';

export const PremierThead: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default PremierThead;
