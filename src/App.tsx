import { BrowserRouter } from 'react-router-dom';

import { Routes } from './Routes';

import GlobalStyle from './style/global';

export const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
