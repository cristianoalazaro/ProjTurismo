import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/style.css';

export default function NewPoint() {
    return (
        <>
            <h1 className='title'>PROJTUR</h1>
            <div className='header'>
                <img src='../images/cachoeiras.jpg' alt='ProjTur' width='200' align='left' />
            </div>
            <div className='formAdd'>
                <form>
                <label>Nome
                    <input type='text' name='name' className='name' 
                    placeholder='Digite o nome do ponto' maxLength='100' required/>
                </label>
                <br />
                <label>UF
                    <select name='estados' required>

                    </select>
                </label>
                <label>Cidade
                    <input type='text' name='city' className='city' placeholder='Digite o nome da cidade' 
                    maxLength='100' required/>
                </label>
                <br />
                <label>
                    <textarea name='description' className='description' placeholder='Descrição...'
                    maxLength='100' required/>
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