# Middleware Syntax

```js
// const http = require("http");

const express = require("express");

// -- app init & middleware --
const app = express();

app.use((req, res, next) => {
  console.log(`first Middleware function`);
  next(); //app will not listen to next middleware untill you did not use next() func
  // next() allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log(`second Middleware function`);
  res.send("<h1> Hello from express </h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);

// --- routes ---
```

# Handling Routes in Express

```js
const express = require("express");

// app init & middleware
const app = express();

app.use("/add-product", (req, res, next) => {
  console.log(`first Middleware function`);
  res.send("<h1> Add Product Page </h1>");
});

app.use("/", (req, res, next) => {
  console.log(`second Middleware function`);
  res.send("<h1> Hello from express </h1>");
});

app.listen(3000);

//routes
```
