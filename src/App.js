import React from 'react';
import axios from 'axios';
import { Context } from './hooks/contextHook';
import Main from './containers/Main';
import themeStyle from './util/theme';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const apiKey = '433b880a1dcad0ae0eb12634ab640f6b';
function App() {
  axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/';

  const theme = createMuiTheme(themeStyle);

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{ key: apiKey }}>
        <Main />
      </Context.Provider>
    </ThemeProvider>

  );
}

export default App;
