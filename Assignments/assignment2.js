const express = require("express");

// init app & middleware
const app = express();

app.use("/", (req, res, next) => {
  console.log(`common middleware function`);
  next();
});

app.use("/users", (req, res, next) => {
  console.log(`Users Request Handler`);
  res.send(`<h1>Users Request Handler</h1>`);
});

app.use("/", (req, res, next) => {
  console.log(`Sending you the dummy response`);
  res.send(`<h1>Sending you the dummy response</h1>`);
});

app.listen(3000, () => {
  console.log(`Server is up & running on port 3000`);
});
