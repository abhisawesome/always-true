const express = require("express");
var cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());

// API routes
app.get("/", (req, res) => {
  return res.status(200).json({
    status: "ok",
    success: true,
  });
});

app.use("/api", (req, res) => {
  console.log(req.params);
  return res.status(200).json({
    status: "ok",
    success: true,
  });
});

// Serve static files from the 'public' directory, but only for /website route
app.use("/website", express.static(path.join(__dirname, "public")));

// Serve index.html for /website route
app.get("/website", (req, res) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process?.env?.PORT || 3000;
app.listen(PORT, () => {
  console.log("Example app listening on port", PORT);
});