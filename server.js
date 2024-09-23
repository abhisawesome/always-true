const express = require("express");
var cors = require("cors");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();

app.use(cors());

// Read package.json to get the version
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const currentVersion = packageJson.version;

// Helper function to send JSON response with headers and request info
const sendJsonResponse = (req, res, additionalData = {}) => {
  return res.status(200).json({
    status: "ok",
    success: true,
    requestInfo: {
      method: req.method,
      url: req.url,
      path: req.path,
      params: req.params,
      query: req.query,
      headers: req.headers,
      ip: req.ip,
    },
    ...additionalData
  });
};

// Helper function to send HTML file
const sendHtmlFile = (res, filename) => {
  return res.sendFile(path.join(__dirname, "public", filename));
};

// Root route
app.get("/", (req, res) => sendJsonResponse(req, res));

// API routes
app.use("/api", (req, res) => sendJsonResponse(req, res));
app.post("/api/user", (req, res) => sendJsonResponse(req, res));
app.get("/api/user/:id", (req, res) => sendJsonResponse(req, res));
app.put("/api/user/:id", (req, res) => sendJsonResponse(req, res));
app.delete("/api/user/:id", (req, res) => sendJsonResponse(req, res));
app.get("/api/products", (req, res) => sendJsonResponse(req, res));
app.get("/api/products/:id", (req, res) => sendJsonResponse(req, res));

// New API route to return the current version
app.get("/version", (req, res) => sendJsonResponse(req, res, { version: currentVersion }));

// Website routes
app.get("/website", (req, res) => sendHtmlFile(res, "index.html"));
app.get("/website/about", (req, res) => sendHtmlFile(res, "about.html"));
app.get("/website/contact", (req, res) => sendHtmlFile(res, "contact.html"));
app.get("/website/products", (req, res) => sendHtmlFile(res, "products.html"));

// Serve static files from the 'public' directory
// This should come after all other routes
app.use("/website", express.static(path.join(__dirname, "public")));

const PORT = process?.env?.PORT || 3000;
app.listen(PORT, () => {
  console.log("Example app listening on port", PORT);
});