const { createServer } = require('http');
const { listarProdutos, adicionarProduto, removerProduto } = require('./src/router/produtos');
const hostname = '127.0.0.1'; 
const port = 3000;
const dados = { listarProdutos, adicionarProduto, removerProduto };

const server = createServer((request, response) => {
    const { url, method } = request;

    console.log("URL -", url);
    console.log("Métodos/Verbos -", method);

    if (url === "/") {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        return response.end('<h1>Aqui é a página inicial</h1>');
    }

    if (url === "/produtos" && method === "GET") {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify(dados));
    }

    if (url === "/produtos/adicionar" && method === "POST") {
        const novoProduto = {
            id: listarProdutos().length + 1,
            nome: 'Monitor',
            valor: 3000
        };
        const resultado = adicionarProduto(novoProduto);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify(resultado));
    }

    if (url === "/produtos/remover" && method === "DELETE") {
        const resultado = removerProduto();
        response.writeHead(200, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify(resultado));
    }

    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>Página não encontrada</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
