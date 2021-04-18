import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
 import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import './styles/style.css';
// import store, { persistor } from './store';

function App() {

  return (
    <div className="container">
      {/* <Provider store={store}>
        <PersistGate persistor={persistor}> */}
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        {/* </PersistGate>
      </Provider> */}
    </div>
  );
}

export default App;
