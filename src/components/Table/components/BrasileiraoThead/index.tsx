import { Container } from './style';

export const BrasileiraoThead: React.FC = () => {
  return (
    <Container>
      <tr id="header-real">
        <th className="emptyCell">P</th>
        <th className="classification-name">
          Classificação <b>2021</b>
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
    </Container>
  );
};

export default BrasileiraoThead;
