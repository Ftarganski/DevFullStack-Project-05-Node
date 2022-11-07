const express = requires ('express');
const app = express();
const port = 3000;

app.get('/', function (req, res){
    res.send('Olá Mundo');
});

app.listen(port, function(){
    console.log("Aplicação Rodando.");
})