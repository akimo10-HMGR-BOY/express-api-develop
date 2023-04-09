const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors()); // CORSの設定

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
