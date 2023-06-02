//here we are importing the functions readFileSync and writeFileSync from the fs module
const { readFileSync, writeFileSync } = require("fs");

//here we import our fs module
const fs = require("fs");

//here we read two files, first.txt and second.text and store their data into variables
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//logging the values of the variables first and second into the console
console.log(first, second);

//writes a new file named 'result-sync.txt' and adds our new string
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`
);

//since we have already written this file, this function uses {flag: 'a'} to 'append' the string to the end of the file instead of overwriting the file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);

//all these operations are performed synchronously
