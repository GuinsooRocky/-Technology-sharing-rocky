import React from 'react';
import './App.less';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home/home.tsx';
import Catalog from './pages/Catalog/catalog.tsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/home' exact component={Catalog} />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
