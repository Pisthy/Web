const express = require('express');
const app = express();
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

let estoque = [];

// Rota para adicionar um novo produto ao estoque
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.push({ id, nome, qtd });
    res.send('Produto adicionado ao estoque.');
});

// Rota para listar todos os produtos do estoque
app.get('/listar', (req, res) => {
    res.json(estoque);
});

// Rota para remover um produto do estoque
app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(produto => produto.id !== id);
    res.send('Produto removido do estoque.');
});

// Rota para editar a quantidade de um produto no estoque
app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    estoque.forEach(produto => {
        if (produto.id === id) {
            produto.qtd = qtd;
        }
    });
    res.send('Quantidade do produto editada.');
});
