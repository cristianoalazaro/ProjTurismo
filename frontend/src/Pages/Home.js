import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {

    return (
        <>
            <h1 className='title'>PROJTUR</h1>
            <div className='header'>
                <img src='images/cachoeiras.jpg' alt='ProjTur' width='200' align='left' />
                <Link to='/points/new'><button className='btncad'>
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