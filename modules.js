const fs = require('fs' );
const os = require('os');


fs.writeFileSync("dummy.txt","trying with modules");//created the new txt file add the file text 

console.log(os.platform());//win32
console.log(os.hostname());//desktop-1(igjuek)
console.log(os.cpus());

//global object 
console.log("abc");
console.log(process.cwd());//path: G:\node js
console.log(process.pid);// 7240