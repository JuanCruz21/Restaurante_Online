const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const UsuarioRouter = require('./Routes/UsuarioRouter');
const PlatosRouter = require('./Routes/PlatosRouter');
const ReservaRouter = require('./Routes/ReservaRouter');

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/usuarios', UsuarioRouter);
app.use('/Plato'  , PlatosRouter);
app.use('/Reserva'  , ReservaRouter);

const PORT = process.env.PORT || 5000;
app.listen(5000);