function  listarProdutos()  {
     const produtos = [
        {
            id: 1,
            nome: "Mouse USB",
            valor: 15.99,
        },
        {
            id: 2,
            nome: "Teclado",
            valor: 25.99,
        }
    ];

    return produtos;
}

    function  listarProdutos() 
     { return JSON.stringify(produtos); } 

    function  adicionarProduto(produto)  
     { produtos.push(produto); 
        return JSON.stringify({ mensagem: 'Produto adicionado com sucesso' }); } 

    function removerProduto()  
    { produtos.pop(); 
        return JSON.stringify({ mensagem: 'Produto removido com sucesso' }); }



 module.exports = { listarProdutos, adicionarProduto, removerProduto };