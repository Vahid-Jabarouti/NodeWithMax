//require is how we import modules
const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req)
});

server.listen(3000)
