import sql from 'mssql';

import Ponto_tour from '../Model/Ponto_tur.js';

//lista pontos turísticos
const list = async (req, res) => {
    try {
        const result = await sql.query(`SELECT p.id, p.nome, p.endereco, p.cidade, e.uf, 
        p.descricao FROM pontos_tur p
        INNER JOIN estados e 
        ON p.estado = e.id
        ORDER BY data DESC`);
        res.json(result.recordsets);
    } catch (error) {
        res.json(`Dados indisponíveis. Erro: ${error}`);
    }
}

//lista estados
const uf = async (req, res)=>{
    try{
        const result = await sql.query(`SELECT * FROM estados ORDER BY nome`);
        res.json(result.recordsets);
    } catch(error) {
        res.json(`Dados indisponíveis. Erro: ${error}`);
    }
}

//cadastra novo ponto turístico
const add = async (req, res) => {
    const { nome, endereco, cidade, estado, descricao } = req.body;

    let error = [];
    if (!nome)
        error.push('Nome não pode ser vazio');
    if (!endereco)
        error.push('Endereço não pode ser vazio');
    if (!cidade)
        error.push('Cidade não pode ser vazio');
    if (!estado)
        error.push('Estado não pode ser vazio');
    if (!descricao)
        error.push('Descrição não pode ser vazio');

    if (error.length > 0) return res.json(`Erro ao inserir dados. Erro: ${error}`);

    try {
        const newPonto_tur = new Ponto_tour(nome, endereco, cidade, estado, descricao);
        await sql.query(`INSERT INTO dbo.pontos_tur (nome, endereco, cidade, 
            estado, descricao) VALUES ('${newPonto_tur.nome}', '${newPonto_tur.endereco}', 
                '${newPonto_tur.cidade}', '${newPonto_tur.estado}', '${newPonto_tur.descricao}') `);
        res.json('Dados inseridos com sucesso!');
    } catch (error) {
        res.json(`Erro ao inserir dados. Erro: ${error}`);
    }
}

export default { list, add, uf }