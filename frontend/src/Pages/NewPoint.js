import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from '../services/axios';
import '../styles/style.css';

export default function NewPoint() {
    const [states, setStates] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = document.querySelector('.name').value;
        const address = document.querySelector('.address').value;
        const city = document.querySelector('.city').value;
        const state = document.querySelector('.state').value
        const description = document.querySelector('.description').value;
        alert(name+ address+ city+state+ description);
    }

    useEffect(() => {
        const getStates = async () => {
            const fetchData = await axios.get('/uf');
            setStates(fetchData.data[0]);
        }
        getStates();
    }, []);

    return (
        <>
            <h1 className='title'>PROJTUR</h1>
            <div className='header'>
                <img src='../images/cachoeiras.jpg' alt='ProjTur' width='200' align='left' />
            </div>
            <div className='formAdd'>
                <form onSubmit={handleSubmit}>
                    <label>Nome
                    <input type='text' name='name' className='name'
                            placeholder='Digite o nome do ponto' maxLength='100' required />
                    </label>
                    <br />
                    <label>Endereço
                        <input type='text' name='address' className='address'
                            placeholder='Digite o endereço do ponto' maxLength='100' required />
                    </label>
                    <br />
                    <label>UF
                    <select name='state' className='state' required>
                            {states.map(state => {
                                let { id, uf, nome } = state; return (
                                    <option value={id} key={id}>{`${uf} - ${nome}`}</option>
                                )
                            })}
                        </select>
                    </label>
                    <label>Cidade
                    <input type='text' name='city' className='city' placeholder='Digite o nome da cidade'
                            maxLength='100' required />
                    </label>
                    <br />
                    <label>
                        <textarea name='description' className='description' placeholder='Descrição...'
                            maxLength='100' required />
                    </label>
                    <div>
                        <Link to='/'><button className='btnform'>Voltar</button></Link>
                        <button type='submit' className='btnform2'>Cadastrar</button>
                    </div>
                </form>
            </div>
        </>
    )
}