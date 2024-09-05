import express from 'express';
import cors from 'cors';
import { DatabaseModel } from './model/DatabaseModel';

const port: number =3333;

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.json({mensagem: "Ola mundo, esta é a minha primeira aplicação web"});

});


server.get('/pessoas', (req, res) => {
    res.json({mensagem: "Aqui sera apresentado os dados das pessoas"});

});

new DatabaseModel(). testeConexao(). then((resdb) => {
    if(resdb) {
        console.log("Conexão com banco de dados realizada com sucesso!");
    
        server.listen(port,() => {
            console.log(`Servidor iniciado no endereço http://localhost:${port}`);
        })
    
    } else {
        console.log("Erro ao conectar com o banco de dados");
      }
});


