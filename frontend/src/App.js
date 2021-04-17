import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Components/Logo';

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  color: red;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Title>PONTOS TURÍSTICOS</Title>
        <hr />
        <Logo />
      </BrowserRouter>
    </div>
  );
}

export default App;
