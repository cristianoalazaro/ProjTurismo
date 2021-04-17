import React ,{useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import axios from './services/axios';
import './styles/style.css';

function App() {
  const [states, setStates] = useState(null);
  const [points, setPoints] = useState(null);

  useEffect(()=>{
      const getStates = async ()=>{
          const fetchData = await axios.get('/uf');
          setStates(fetchData.data[0]);
      }
      getStates();
  }, []);

  useEffect(()=>{
    const getPoints = async ()=>{
        const fetchData = await axios.get('/list');
        setPoints(fetchData.data[0]);
    }
    getPoints();
}, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
