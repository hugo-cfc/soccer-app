import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './Routes';

import GlobalStyle from './style/global';
import defaultTheme from './style/theme/defaultTheme';

export const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
