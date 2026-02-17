function rootcall(req,resp){

console.log("this is root program is function");
resp.write("this is root program is function");
}
module.exports = rootcall;

