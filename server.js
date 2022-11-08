const express = require("express");

const app = express();
const db = require("./db.js");

require("dotenv").config();

// ROTAS DO SISTEMA
const user = require("./routes/user");
const auth = require("./routes/auth");
const product = require("./routes/product");
const category = require("./routes/category");

app.use(express.json());

app.use("/user", user);
app.use("/auth", auth);
app.use("/product", product);
app.use("/category", category);

db.sync(() => console.log(">>>BD RODANDO<<<"));

app.listen(process.env.PORT, function () {
  console.log(">>>SISTEMA RODANDO<<<");
});
