import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import './styles/style.css';

function App() {

  return (
    <div className="container">
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
    </div>
  );
}

export default App;
