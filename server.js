const express = require("express");
const { ExpressPeerServer } = require("peer"); // ✅ Correct package and import
const cors = require("cors");

const app = express();
app.use(cors());

const server = require("http").createServer(app);

// ✅ Create PeerJS server with Express
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/myapp",
  corsOptions: {
    origin: '*'
  }
});

// ✅ Mount PeerJS server
app.use("/peerjs", peerServer);

// ✅ Health check endpoint (Render requirement)
app.get("/", (req, res) => {
  res.send("PeerJS Server is running!");
});

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`✅ PeerJS server running on port ${PORT}`);
});

// ✅ Log connections
peerServer.on("connection", (client) => {
  console.log("New Peer connected:", client.getId());
});

peerServer.on("disconnect", (client) => {
  console.log("Peer disconnected:", client.getId());
});