const http = require("http");
const app = require("./app");
const { initializeSocket } = require("./socket"); // ...new import...
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeSocket(server); // ...initialize socket with the server...

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
