var http = require("http");

var server = http.createServer((request, response) => {
  console.log(request.url);

  response.end;
});

server.listen(3000);

console.log("Server is listening on port 3000");
