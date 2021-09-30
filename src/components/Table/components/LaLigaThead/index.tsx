import { Container } from './style';

export const LaLigaThead: React.FC = () => {
  return (
    <Container>
      <tr>
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
    </Container>
  );
};

export default LaLigaThead;
