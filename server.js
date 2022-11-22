const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("tmp/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
  jsonServer.rewriter({
	"/*": "/$1",
    "/api/*": "/$1",
	"/api1/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);

server.use(router);
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
