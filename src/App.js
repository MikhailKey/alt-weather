import React from 'react';
import axios from 'axios';
import { Context } from './hooks/contextHook';
import Main from './containers/Main';

const apiKey = '433b880a1dcad0ae0eb12634ab640f6b';
function App() {
axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/';

  return (
    <Context.Provider value={{ key: apiKey }}>
      <Main />
    </Context.Provider>
  );
}

export default App;
