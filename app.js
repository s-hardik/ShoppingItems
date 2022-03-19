const express = require("express");
const route = require("./Routes/route");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(route);
app.get("/", (req, res) => {
  res.json({ message: "This is a API" });
});

app.listen(3212, () => {
  console.log("server running at 3213");
});
