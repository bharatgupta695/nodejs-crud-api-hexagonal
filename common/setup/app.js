const express = require("express");
const bodyParser = require("body-parser");

const app =express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// route imports
const product = require("../../Products/drivers/actors/ProductRouter");


app.use("/api/v1",product);

//Middleware for error
//app.use(errorMiddleware);

module.exports = app;