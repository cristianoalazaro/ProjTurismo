import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from '../services/axios';
import Points from '../Components/Points';
import Pagination from '../Components/Pagination';


export default function Home() {

    const [points, setPoints] = useState([]);
    const [filteredPoints, setFilteredPoints] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pointsPerPage, setPointsPerPage] = useState(2);

    //Filtrar os pontos turísticos
    const handleFind = () => {
        const key = document.querySelector('.inputfind').value.toUpperCase().trim();
        if (key) {
            let filteredDatas = points.filter(point => {
                return (point.nome.toUpperCase().includes(key)
                    || point.endereco.toUpperCase().includes(key)
                    || point.cidade.toUpperCase().includes(key)
                    || point.descricao.toUpperCase().includes(key))
            });

            return setFilteredPoints(filteredDatas);

        }
        setFilteredPoints(points);
    }

    //consumir a API

    useEffect(() => {
        const getPoints = async () => {
            setLoading(true);
            const fetchData = await axios.get('/list');
            setPoints(fetchData.data[0]);
            setFilteredPoints(fetchData.data[0]);
            setLoading(false);
        }
        getPoints();
    }, []);

    //getCurrentPoint
    const indexOfLastPoint = currentPage * pointsPerPage;
    const indexOfFirstPoint = indexOfLastPoint - pointsPerPage;
    const currentPoints = filteredPoints.slice(indexOfFirstPoint, indexOfLastPoint);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='container'>
            <h1 className='title'>PROJTUR</h1>
            <div className='header'>
                <img src='images/cachoeiras.jpg' alt='ProjTur' width='200' align='left' />
                <Link to='/points/new' ><button className='btncad btn btn-secondary'>
                    Cadastrar um ponto turístico</button></Link>
            </div>
            <div className='bodyfind'>
                <input type='text' name='inputfind form-control' className='inputfind'
                    placeholder='Digite um termo para buscar um ponto turístico...' />
                <button className='btnfind btn btn-primary' onClick={handleFind}>Buscar</button>
            </div>

            <Points points={currentPoints} loading={loading} />
            <Pagination pointsPerPage={pointsPerPage} totalPoints={filteredPoints.length} paginate={paginate} />
        </div>
    )
}