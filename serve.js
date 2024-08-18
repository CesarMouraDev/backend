const { createServer } = require('node:http');
const http = require('http');
const hostname = '127.0.0.1'; 
const port = 3000
const server = createServer((request, response) => {

    console.log("Metodos/Verbos:" + request.method);
    console.log("URL:" + request.url);


    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello World</h1>');
} );

server.listen(port, hostname, () => 
    { console.log(`Servidor rodando em http://${hostname}:${port}/`); });


//const http = require('http');   
//const hostname = '127.0.0.1'; 
//const port = 3000; 
//const server = http.createServer((req, res) => { res.statusCode = 200; // Código de status HTTP 200 (OK) 
//    res.setHeader('Content-Type', 'text/html'); // Definindo o tipo de conteúdo como HTML 
//    res.end('<h1>Olá, mundo!</h1>'); // Enviando a resposta });
//
//server.listen(port, hostname, () => { console.log(`Servidor rodando em http://${hostname}:${port}/`); });
//