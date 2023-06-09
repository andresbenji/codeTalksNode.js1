//here we are importing the 'check' function from 'express-validator'
const { check } = require("express-validator");

//here we export an array contains validation rules for signup to be used in server.js
exports.signupValidation = [
  check("name", "Name is requied").not().isEmpty(),
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];

//here we export another array that contains a set of rules for login validation to be used in server.js
exports.loginValidation = [
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];
