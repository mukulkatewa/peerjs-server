const express = require("express");
const { ExpressPeerServer } = require("peerjs");
const cors = require("cors");
const http = require("http");

const app = express();
app.use(cors());

const server = http.createServer(app);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/myapp"
});

app.use("/peerjs", peerServer);

// ✅ Add health check route for Render
app.get("/", (req, res) => res.send("🟢 PeerJS server is running"));

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`✅ PeerJS server running on http://localhost:${PORT}`);
});
