const express = require('express');
const mat = require('./Util/matematica')
const app = express();

app.get('/verificar-numero-primo/:n', function(req,res){
    let n = req.params.n;
    let ehPrimo = mat.verificarNumeroPrimo(n);
    res.send(ehPrimo);
});

const port = 8080;
app.listen(port, function(){
    console.log('app rodando na porta' +port)
})