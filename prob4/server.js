//here we are importing multiple files and packages
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

//here we import our two validator arrays from validation.js
const { signupValidation, loginValidation } = require("./validation.js");

//
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

//here we define our handler for the HTTP GET request, and send our string when our root folder is requested
app.get("/", (req, res) => {
  res.send("Node js file upload rest apis");
});
app.post("/register", signupValidation, (req, res, next) => {
  // your registration code
});
app.post("/login", loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});
//here we create our port and set it to 3000
app.listen(3000, () => console.log("Server is running on port 3000"));
