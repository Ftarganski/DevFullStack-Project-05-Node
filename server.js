const express = require("express");

const app = express();
const port = 3000;

//Rotas
const user = require('./routes/user');
const auth = require('./routes/auth');

app.use('/user', user);
app.use('/auth', auth);

app.listen(port, function () {
  console.log("Aplicação Rodando.");
});
