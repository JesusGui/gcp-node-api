const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "local";
const SERVICE_NAME = process.env.SERVICE_NAME || "gcp-node-api";
const API_KEY = process.env.API_KEY;

app.get("/", (req, res) => {
  res.json({
    message: "Hola desde Cloud Run 🚀",
    env: ENV,
    service: SERVICE_NAME,
    api_key: API_KEY
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

