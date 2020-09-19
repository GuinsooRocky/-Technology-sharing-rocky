import React from 'react';
import './App.less';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home.tsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <header className="App-header">
        </header> */}
          <Route path='/' exact component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
