let produtos = [];

function criarProduto(id,nome,qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd,
    };
    return p;
}

function adicionarProdutos(p){
    produtos.push(p);
}

function listarProdutos(p){
    return produtos;
}

function removerProduto(id){
    produtos = produto.filter((p)=>{
        p.id !=id
    })
}

module.exports= {
    criarProduto,
    adicionarProdutos,
    listarProdutos,
    removerProduto
}