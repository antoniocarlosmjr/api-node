const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('./models/home');
const Home = mongoose.model('Home');

require('./models/contato');
const Contato = mongoose.model('Contato');

require('./models/ong');
const Ong = mongoose.model('Ong');

/**
 * Força a utilizar o JSON
 */
app.use(express.json());

/**
 * Implementa o middleware para acessar a API de qualquer lugar. O "*" informa que permite
 * a requisição de qualquer aplicação.
 */
app.use((requisicao, resposta, next) => {
    resposta.header("Access-Control-Allow-Origin", "*");
    resposta.header("Access-Control-Methods", "GET, PUT, POST, DELETE");
    resposta.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
    app.use(cors());
    next();
});

/**
 * Realiza conexão com o banco de dados mongodb
 */
mongoose.connect(
    'mongodb+srv://antonio:zvYDFJpriBT8JZdl@cluster0.klqdo.mongodb.net/test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("Conexão com o MongoDB realizada com sucesso");
}).catch((erro) => {
    console.log("(Erro) Conexão com o MongoDB não realizada: " + erro);
});

/**
 * Cria uma rota para o 'home'
 */
app.get('/', (requisicao, resposta) => {
    resposta.json({name: "Antonio Martins"});
});

app.get('/home', async (requisicao, resposta) => {
    Home.findOne({}).then((home) => {
            return resposta.json({
                error: false,
                home
            });
        }).catch((erro) => {
           return resposta.status(400).json({
               error: true,
               mensagem: "Nenhum registro encontrado!"
           });
    });
});

app.post('/', async (requisicao, resposta) => {

    const dados = {
        "topTitulo": "Temos a solução que a sua ong precisa!",
        "topSubtitulo": "Contrate o melhor sistema de doação para sua ONG",
        "topTextoBtn": "ENTRE EM CONTATO",
        "topLinkBtn": "http://localhost:3000/",
        "serTitulo": "Serviços",
        "serSubtitulo": "Featured content or information",
        "serUmIcone": "code",
        "serUmTitulo": "Serviço 1",
        "serUmDesc": "Serviço de carrego",
        "serDoisIcone": "laptop-code",
        "serDoisTitulo": "Serviço 2",
        "serDoisDesc": "Serviço de programação.",
        "serTresIcone": "mobile-alt",
        "serTresTitulo": "Serviço 3",
        "serTresDesc": "Sem descrição",
    }

    const homeExiste = await Home.findOne({});

    if (homeExiste) {
        return resposta.status(400).json({
            error: true,
            mensagem: "Erro: A página home já possui um registro!"
        });
    }

    await Home.create(dados, (erro) => {
        if (erro) {
            return resposta.status(400).json({
                error: true,
                mensagem: "Erro: Conteúdo da página home não cadastrado com sucesso!"
            });
        }
    });

    return resposta.json({
        error: false,
        mensagem: "Conteúdo da página home cadastrado com sucesso!"
    });
});

app.post('/contato', async (requisicao, resposta) => {
    await Contato.create(requisicao.body, (erro) => {
        if (erro) {
            return resposta.status(400).json({
                error: true,
                mensagem: "Erro: Mensagem de contato não cadastrada com sucesso!"
            });
        }
    });

    return resposta.json({
        error: false,
        mensagem: "Mensagem de contato cadastrada com sucesso!"
    });
});

app.post('/ong', async (requisicao, resposta) => {
    await Ong.create(requisicao.body, (erro) => {
        if (erro) {
            return resposta.status(400).json({
                error: true,
                mensagem: "Erro: ONG não cadastrada!"
            });
        }
    });

    return resposta.json({
        error: false,
        mensagem: "Ong cadastrada com sucesso!"
    });
});

app.get('/ong', async (requisicao, resposta) => {
    Ong.findOne({}).then((ong) => {
        return resposta.json({
            error: false,
            ong
        });
    }).catch((erro) => {
        return resposta.status(400).json({
            error: true,
            mensagem: "Nenhuma ong encontrada!"
        });
    });
});

/**
 * Inicia o servidor
 */
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});