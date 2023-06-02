//here we are importing the functions readFile and writeFile from the fs module
const { readFile, writeFile } = require("fs");
console.log("start");

//here we are reading the file first.text and executing a callback function once it's done reading
readFile("./content/first.txt", "utf8", (err, result) => {
  //if thewre is an error while reading, it is logged into the console
  if (err) {
    console.log(err);
    return;
  }

  //if no errors the data of our file is stored into the variable first and logged into the console
  const first = result;
  console.log(first);

  //here we are reading the file second.txt and executing a callback function once its done reading
  readFile("./content/second.txt", "utf8", (err, result) => {
    // if there is an error while reading, it is logged into the console
    if (err) {
      console.log(err);
      return;
    }

    //if no errors the data of our file is stored into the variable second and logged into the console
    const second = result;
    console.log(second);

    //here we are writing a new file called "result-async.txt" and adding our string. after the file is done writing then it executes a callback function
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        //if there is an error while writing our file then it will log it into the console
        if (err) {
          console.log(err);
          return;
        }

        //if there is no error the it logs our string
        console.log("done with the task");
      }
    );
  });
});

//since our operations are asynchronous this string is logged before we are done reading our file and creating our new file
console.log("starting next task");
