const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 3000;

const backendURL = process.env.BACKEND_URL || "http://backend:5000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post(`${backendURL}/submit`, req.body);
    res.send(response.data);
  } catch (error) {
    console.error("Error communicating with backend:", error.message);
    res.status(500).send("Error communicating with backend");
  }
});

app.listen(port, () => {
  console.log(`Frontend server running at http://localhost:${port}`);
});
