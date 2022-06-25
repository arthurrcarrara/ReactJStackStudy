/* eslint-disable no-console */
const express = require('express');
require('express-async-errors');

const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(routes);
// Error Handler precisa vir depois das rotas
// Errror handler precisa ter os quatros parametros error, request, response, next
app.use((error, request, response, next) => {
  console.log('#### ERROR HANDLER ####')
  console.log(error);
  response.sendStatus(500);

  if (response.sendStatus(200)) {
    console.log(response)
  }
})

app.listen(3030, () => console.log('Server started at http://localhost:3030'));

