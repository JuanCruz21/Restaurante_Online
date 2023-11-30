const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const UsuarioRouter = require('./Routes/UsuarioRouter');
const PlatosRouter = require('./Routes/PlatosRouter');
const ReservaRouter = require('./Routes/ReservaRouter');
const PedidoRouter = require('./Routes/PedidoRouter')

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/Usuarios', UsuarioRouter);
app.use('/Plato'  , PlatosRouter);
app.use('/Reserva'  , ReservaRouter);
app.use('/Pedido', PedidoRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT);