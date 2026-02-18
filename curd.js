
//created the text file (sync method)
const fs = require("fs");

//fs.writeFileSync("text/curd1.txt","this is curd operation");

//remove the file(sync method and async method)
//fs.unlinkSync("text/curd1.txt");


//read the data insaid the file (sync method and async method)
// let data = fs.readFileSync("text/curd.txt","utf-8");
// console.log(data);

//append the data in the file (sync method and async method)
//const data1 =fs.appendFileSync("text/curd.txt","\nthis checking append file data use of async methode");
 

//the created file add the data for direct form the console(npx nodemon curd.js write consoleinput "this text is add the file")

//console input method is use the delete data
console.log(process.argv[2]);
const operation = process.argv[2];
if(operation =='write'){
    const name = process.argv[3];
    const data = process.argv[4];
    const fullname = "text/"+name+".txt";

    fs.writeFileSync(fullname,data);
    
}else if(operation =="read"){ //(npx nodemon curd.js read consoleinput "curd")
    const name = process.argv[3];
    const fullname = "text/"+name+".txt";
    let data = fs.readFileSync(fullname,'utf8');
    console.log(data);
} else if(operation == "update"){
    const name = process.argv[3];
    const data = process.argv[4];
    const fullname = "text/"+name+".txt";
    const olddata = fs.appendFileSync(fullname,data);//update the data (add the data ib this file)
    console.log(olddata);
}else if(operation == "delete"){   //delete the file (ex., is delete the file curd.txt )
    const name =process.argv[3];
    const fullname = "text/"+name+".txt";
    const newname = fs.unlinkSync(fullname);
    console.log(newname);
}else{
    console.log("invalid operation");
}