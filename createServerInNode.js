const http = require("http");

http
  .createServer((req, res) => {
    res.end("HELLO WORLD");
  })
  .listen(8000);
