import React from 'react';
import './App.less';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './component/Home/home.tsx';
import Catalog from './pages/Catalog/catalog';

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
