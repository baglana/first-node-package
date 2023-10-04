const express = require("express");
const app = express();
const port = 8088;

app.get("/", (req, res) => {
  res.send("Hello Kazakhstan!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
