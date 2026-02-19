

const path = require("path");
const fs = require("fs");


fs.appendFileSync("text/path.txt","\nThis is a test file created using Node.js path module.");

console.log("File created successfully at:"+path.resolve("text/path.txt"));//File created successfully at:G:\node js\text\path.txt
console.log("Directory name:"+path.dirname(path.resolve("text/path.txt")));//Directory name:G:\node js\text
console.log("Base name:"+path.basename(path.resolve("text/path.txt")));//Base name:path.txt
console.log("File extension:"+path.extname(path.resolve("text/path.txt")));//File extension:.txt

const data = fs.readFileSync(path.resolve("text/path.txt"),"utf-8");
console.log("File content:"+data);



//global modules
console.log("Current Directory:"+__dirname);//Current Directory:G:\node js
console.log("Current File:"+__filename);//Current File:G:\node js\path.js