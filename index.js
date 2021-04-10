const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end("<h1>Hello this is a test node website</h1>");
});

server.listen(PORT, () => console.log(`server is listening at PORT ${PORT}`));
