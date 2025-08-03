const express = require("express");
const { ExpressPeerServer } = require("peerjs");
const cors = require("cors");

const app = express();
app.use(cors());

const server = require("http").createServer(app);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/myapp"
});

app.use("/peerjs", peerServer);

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`✅ PeerJS server running on http://localhost:${PORT}`);
});
