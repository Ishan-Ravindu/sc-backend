const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const { createCustomer } = require('./routes/customer');
//import route files
const createCustomer = require("./routes/customer");
const getCustomerDetails = require("./routes/customer");
const deleteCustomer = require("./routes/customer");
const updateCustomer = require("./routes/customer");

const createSupplier = require("./routes/supplier");
const getSupplierDetails = require("./routes/supplier");
const deleteSupplier = require("./routes/supplier");
const updateSupplier = require("./routes/supplier");

const createItem = require("./routes/item");
const getItemDetails = require("./routes/item");
const deleteItem = require("./routes/item");
const updateItem = require("./routes/item");

const createStock = require("./routes/stock");
const getStockDetails = require("./routes/stock");
const deleteStock = require("./routes/stock");
const updateStock = require("./routes/stock");

const app = express();

mongoose
  .connect(
    "mongodb+srv://Amila:23188308@customer.eexdg.mongodb.net/Customer?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected to database!");
  })
  .catch(() => {
    console.log("connection failed! ");
  });
mongoose.set("useCreateIndex", true);

//use body-parser to pass the json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//allow to access the backend images to fontend

//giving allow the headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,PUT,DELETE,OPTIONS"
  );
  next();
});

app.use("/api/customer", createCustomer);
app.use("/api/customer", getCustomerDetails);
app.use("/api/customer", deleteCustomer);
app.use("/api/customer", updateCustomer);

app.use("/api/supplier", createSupplier);
app.use("/api/supplier", getSupplierDetails);
app.use("/api/supplier", deleteSupplier);
app.use("/api/supplier", updateSupplier);

app.use("/api/item", createItem);
app.use("/api/item", getItemDetails);
app.use("/api/item", deleteItem);
app.use("/api/item", updateItem);

app.use("/api/stock", createStock);
app.use("/api/stock", getStockDetails);
app.use("/api/stock", deleteStock);
app.use("/api/stock", updateStock);

module.exports = app;
