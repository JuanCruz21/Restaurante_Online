const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const UsuarioRouter = require('./Routes/UsuarioRouter');

const app = express();
app.use(bodyParser.json());

app.use('/usuarios', UsuarioRouter);

const PORT = process.env.PORT || 5000;
app.listen(5000);