import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import TablePage from './pages/TablePage';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/table-page:id" component={TablePage} />
    </Switch>
  );
};
