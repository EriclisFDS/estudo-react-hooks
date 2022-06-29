import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import './App.css';

import DataContext, { data } from '../data/DataContext';
import Store from '../data/Store';

function App(props) {

  const [ state, setState ] = useState(data);

  return (
    <Store>
      <DataContext.Provider value={{state, setState}} >
        <div className="App">
          <BrowserRouter>
            <Menu></Menu>
            <Content></Content>
          </BrowserRouter>
        </div>
      </DataContext.Provider>
    </Store>
  );
}

export default App;
