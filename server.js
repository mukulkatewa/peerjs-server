const express = require("express");
const { PeerServer } = require("peerjs"); // ✅ Correct import
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 9000;

// ✅ Set up PeerJS server directly (no express wrapper needed)
const peerServer = PeerServer({
  port: PORT,
  path: "/myapp",
  corsOptions: {
    origin: '*'
  }
});

// ✅ Health check (Render requires it)
peerServer.on("connection", (client) => {
  console.log("New Peer connected:", client.getId());
});
