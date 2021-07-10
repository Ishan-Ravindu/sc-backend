const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3001;

app.set("port", port);

const server = http.createServer(app);
console.log("Listening Port " + port);
server.listen(port);
