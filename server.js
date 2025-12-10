const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World 2');
});

server.listen(port, () => {
  console.log('listening in port', port);
});
