const http=require('http');

const server=http.createServer((request,response) => {
    response.end("Response from server")
});

server.listen(3000);