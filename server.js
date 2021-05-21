var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

// Serve static content
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Serve your app
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
