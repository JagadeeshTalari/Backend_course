const express = require("express");

// app init & middleware
const app = express();

//routes

app.use("/add-product", (req, res, next) => {
  console.log(`first Middleware function`);
  res.send("<h1> Add Product Page </h1>");
});

app.use("/", (req, res, next) => {
  console.log(`second Middleware function`);
  res.send("<h1> Hello from express </h1>");
});

app.listen(3000);
