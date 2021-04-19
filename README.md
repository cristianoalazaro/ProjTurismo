# ProjTurismo

INSTRUÇÕES PARA INSTALAÇÃO E CONFIGURAÇÃO DO BANCO DE DADOS SQL SERVER
No programa Microsoft SQL Server Management Studio clique em Novo banco de dados - o nome do banco é Turismo - clique em OK.
Na aba banco de dados com o botão esquerdo do mouse no banco criado selecione Nova consulta
Na pasta do projeto, abra a pasta banco de dados SQL Server - abra o arquivo Turismo e cole o conteudo na tela de consulta - 
clique em Executar, o banco estará criado.
Abra o programa SQL Server Configuration vá em Configuração de rede do SQL Server - Protocolos para SQL Server - TCP/IP - Habilitar e confirme.
Na pasta do projeto, vá na pasta backend, abra o arquivo .env e coloque as configurações do Banco de Dados e salve.

INSTRUÇÕES DO PROJETO
Para instalar o backend no servidor, suba os arquivos da pasta backend e execute o comando npm install.
Para instalar o frontend no servidor, suba os arquivos da pasta frontend e execute o comando npm install.
Para rodar o backend em modo development, na pasta do backend execute o comando npm run startdev.
Para rodar o backend em modo production, na pasta do frontend execute o comando npm start.
Paa rodar o frontend, na pasta frontend execute o comando yarn start.
O backend está configurado para rodar na porta 3001 e o frontend na porta 3000.
