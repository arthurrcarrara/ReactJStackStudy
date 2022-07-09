/* eslint-disable no-console */
const express = require('express');
require('express-async-errors');

const routes = require('./routes')
const cors = require('./app/middlewares/cors')
const errorHandler = require('./app/middlewares/errorHandler')

const app = express();

//A ordem dos middleware é importante saber.
app.use(express.json()); //body-parser
app.use(cors)
app.use(routes);
// Error Handler precisa vir depois das rotas
// Errror handler precisa ter os quatros parametros error, request, response, next
app.use(errorHandler)

app.listen(3001, () => console.log('Server started at http://localhost:3001'));

