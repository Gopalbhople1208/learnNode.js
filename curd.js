
//created the text file (sync method)
const fs = require("fs");
//fs.writeFileSync("text/curd1.txt","this is curd operation");

//remove the file(sync method and async method)
//fs.unlinkSync("text/curd1.txt");


//read the data insaid the file (sync method and async method)
let data = fs.readFileSync("text/curd.txt","utf-8");
console.log(data);

//append the data in the file (sync method and async method)
const data1 =fs.appendFileSync("text/curd.txt","\nthis checking append file data use of async methode");
