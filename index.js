const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end("hello");
});

server.listen(PORT, () => console.log(`server is listening at PORT ${PORT}`));
