SEQUÊNCIA PARA CRIAR O PROJETO DA SEMANA DE IMERSÃO NODE.JS + REACT

Criar o arquivo package
##### npm init

Gerencia as requisições, rotas, URLs, entre outras funcionalidades
##### npm install express

Instalar a biblioteca nodemon que serve para reiniciar o servidor sempre que houver alteração no código fonte,
g significa globalmente
##### npm install -g nodemon

Instalar o banco de dados MongoDB
##### npm install --save mongodb

Instala a biblioteca que traduz os dados que vem do MongoDB: o Mongoose.
O Mongoose traduz os dados o banco de dados para objetos Javascript que possam ser utilizados pela aplicação.
##### npm install --save mongoose

Permitir o acesso a API
##### npm install --save cors

Gerar o backup do banco de dados MongoDB
##### mongodump --db <database> --out <caminho-onde-quer-salvar-backup>

Restaurar o backup do banco de dados MongoDB
##### mongorestore --db <database> c:\data\db\<database>