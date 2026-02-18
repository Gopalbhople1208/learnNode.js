const querystring = require("querystring");
function rootsubmit(req,resp){

let dataGiven =[];
    req.on("data",(chunk)=>{
        dataGiven.push(chunk);
    })
    req.on("end",()=>{
        let pareData = Buffer.concat(dataGiven).toString();
        let rawData = querystring.parse(pareData);
        let userGo = "this is user name: "+rawData.username+" and this is email: "+rawData.email;
        console.log(userGo);
    })
resp.write(`
   <h1> From submit Sucessfully</h1>
    `)
resp.end();
}
module.exports = rootsubmit;