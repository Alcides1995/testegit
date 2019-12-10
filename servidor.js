const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.status(200).send({ message: 'Olá mundo estou funcinando!' });
})

app.get('/Olá', (req, res) => {
 res.status(200).send({ message: 'eu Sou o olá!' });
})

app.listen(3001, () => {
  console.log('Api rodando na porta 3001');
})
