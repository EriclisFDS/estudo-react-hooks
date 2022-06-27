import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <Content></Content>
      </BrowserRouter>
    </div>
  );
}

export default App;
