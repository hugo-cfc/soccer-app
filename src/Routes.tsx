import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import CompetitionPage from './pages/CompetitionPage';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/competition/:id" component={CompetitionPage} />
    </Switch>
  );
};
