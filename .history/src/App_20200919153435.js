import React from 'react';
import './App.less';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home/home.tsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Route path='/' exact component={Home} />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
