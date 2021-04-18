import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from '../services/axios';
import Pagination from '../Components/Pagination';


export default function Home() {

    const [states, setStates] = useState([0]);
    const [points, setPoints] = useState([0]);

    let totalRecords = 0;

        useEffect(() => {
            const getStates = async () => {
                const fetchData = await axios.get('/uf');
                setStates(fetchData.data[0]);
            }
            getStates();
        }, []);

    useEffect(() => {
        const getPoints = async () => {
            const fetchData = await axios.get('/list');
            setPoints(fetchData.data[0]);
        }
        getPoints();
    }, []);

    console.log(states);
    console.log(points);
    console.log(points.length);

    return (
        <>
            <h1 className='title'>PROJTUR</h1>
            <div className='header'>
                <img src='images/cachoeiras.jpg' alt='ProjTur' width='200' align='left' />
                <Link to='/points/new' ><button className='btncad'>
                    Cadastrar um ponto turístico</button></Link>
            </div>
            <div className='bodyfind'>
                <input type='text' name='inputfind' className='inputfind'
                    placeholder='Digite um termo para buscar um ponto turístico...' />
                <button className='btnfind'>Buscar</button>
            </div>
        </>
    )
}