import React from 'react';
import axios from 'axios';
import { Context } from './hooks/contextHook';
import Main from './containers/Main';
import themeStyle from './util/theme';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'simplebar/dist/simplebar.min.css';
import { RestLink } from 'apollo-link-rest';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const apiKey = '433b880a1dcad0ae0eb12634ab640f6b';
const App = () => {
  axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/';

  const theme = createMuiTheme(themeStyle);
  
  const restLink = new RestLink({
    uri: 'https://api.openweathermap.org/data/2.5/'
  });

  const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache()
  }); 

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{ key: apiKey }}>
        <ApolloProvider client={client}>
          <Main />
        </ApolloProvider>
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
