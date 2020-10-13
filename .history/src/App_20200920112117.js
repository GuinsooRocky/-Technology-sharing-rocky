import React from 'react';
import './App.less';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home/home.tsx';
import Catalog from './pages/Catalog/catalog';
import Reptiles from './pages/Reptiles/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/catalog' exact component={Catalog} />
          <Route path='/reptiles' exact component={Reptiles} />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
