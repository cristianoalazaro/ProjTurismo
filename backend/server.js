import express from 'express';
import cors from 'cors';
import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

import routes from './src/routes.js';

const config = {
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    server: process.env.DBHOST,
    database: process.env.DBDATABASE,
    port: parseInt(process.env.DBPORT),
    "options":{
        "trustedConnection": true,
        "encrypt": true,
        "enableArithAbort": true 
    },
}

async function connect (){
    try{
        await sql.connect(config);
        console.log('Conectado com sucesso ao SQL Server!');
    } catch(error){
        console.log(`Erro ao conectar ao SQL Server. Erro: ${error}`);
    }
}

connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',routes);

app.listen(3001, ()=>{
    console.log('Aplicativo carregado na porta 3001!');
});