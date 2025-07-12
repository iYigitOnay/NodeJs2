var http = require("http");

var server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/plain");
  response.statusCode = 200;
  response.statusMessage = "OK";

  response.write("<h1>Hello, World!<h1>");
  response.write("This is a simple HTTP server.");

  response.end;
});

server.listen(3000);

console.log("Server is listening on port 3000");
