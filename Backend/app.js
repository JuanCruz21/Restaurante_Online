const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const UsuarioRouter = require('./Routes/UsuarioRouter');
const PlatosRouter = require('./Routes/PlatosRouter');

const app = express();
app.use(bodyParser.json());

app.use('/usuarios', UsuarioRouter);
app.use('/Platos'  , PlatosRouter);

const PORT = process.env.PORT || 5000;
app.listen(5000);