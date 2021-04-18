import React from 'react'

export default function Pagination({ points, loading }) {
    if (loading) {
        return (
            <h2>Loading...</h2>
        )
    }

    function handleShowItems(id) {
        const text = document.getElementById(`${id}`);
        if (text.style.display == 'none')
            text.style.display = 'block';
        else
            text.style.display = 'none';
    }

    return <ul className='list-group mb-4'>
        {points.map(point => (
            <li key='point.id' className='list-group-item'>
                <h3>{point.nome}</h3>
                <p>{`${point.cidade} - ${point.uf}`}</p>
                <button onClick={function handleButton() { handleShowItems(`${point.id}`) }}
                    className={`btn-${point.id}`}>
                    Ver detalhes
                </button>
                {/* <br /> */}
                <small className={`${point.id}-text`} id={`${point.id}`} style={{ display: 'none' }}>{point.descricao}</small>
            </li>
        ))}
    </ul>
}
