function rootsubmit(req,resp){


resp.write(`
   <h1> From submit Sucessfully</h1>
    `)
resp.end();
}
module.exports = rootsubmit;