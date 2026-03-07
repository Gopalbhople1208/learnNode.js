    import express from 'express';
    import nodemailer from 'nodemailer'



    const app = express();





    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'gbhople63@gmail.com',
            pass:"hemi fheo tskq hozo",

        }
    });

   app.set('view engine','ejs');
   app.use(express.urlencoded({extended:true}));


    app.get("/",(req,resp)=>{
    resp.render("ehome");
    })

    app.get("/email",(req,resp)=>{
        resp.render("email")
    })
    app.post("/submit-email",(req,resp)=>{
    console.log(req.body);

    const mailOptions ={
        from :'gbhople63@gmail.com',
        to:'gbhople63@gmail.com',
        subject: req.body.subject,
        text:req.body.content

    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
    return resp.send("email is fail, try again!")
        }
        console.log(info.response);
            resp.send("email send successfully");
        
    })
    
    })
    app.listen(4040,()=>{
        console.log("server is run http://localhost:4040");
    })