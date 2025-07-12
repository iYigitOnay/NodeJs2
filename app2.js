var http = require("http");

var server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("<html><body><h1>Hello, World!</h1></body></html>");
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 Not Found");
  }
  response.end();
});

server.listen(3000);

console.log("Server is Listening on port 3000");
