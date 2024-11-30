import carros2024 from './tabelacarros.js';
import express from 'express';

const app = express();

app.use(express.json());

app.get ('/', (req, res) => {
    res.status(200).send(carros2024);
});

app.get('/:sigla', (requisicao, resposta) => {
    const siglaInformada = requisicao.params.sigla.toUpperCase(); // obtendo a sigla
    const carro = tabelacarros.find((infoCarro) => infoCarro.sigla === siglaInformada); // buscar o carro
    if (!carro) {
           // vazio not
        resposta
        .status
        .send(
            'Não existe um carro com a sigla informada! ' //Mensagem de erro
        );
    return;


    }
    resposta.status(200).send(carro); // se encontra a silga volta a resposta correta

});

app.post('/'), (req,res) => {
    const novoCarro = req.body; // Obtem o corpo enviado para incluir um carro
    tabelacarros.push(novoCarro); // Adciona o novo carro a lista de carros
    res:status(200).send(novoCarro); //Retorna o carro adicionado com status 200 (ok).
}

app.listen(3001,() => console.log("Servidor Funcionando..."));

