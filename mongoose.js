import mongoose from 'mongoose'

async function dbConnection(){
    await mongoose.connect("mongodb://localhost:27017/school");
    const schema=   mongoose.Schema({
        name:"String",
        age:"number",
        email:"String"
    })
    
    const studentsModel =  mongoose.model("student",schema);
    const result= studentsModel.find();
    console.log(result);

}
dbConnection(); 