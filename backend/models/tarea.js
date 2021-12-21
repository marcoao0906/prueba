//crear esquema y modelo asociado a mongoose

const mongoose=require("mongoose");
const {Schema}=mongoose;

const tareaSchema=new Schema({
    name: {type:String, required:true},    
    description:{type:String, required:true},
    project:{type:String,required:true},
    begin_date:{type:Date, required:true},
    finish_date:{type:Date,reqyured:true},
    usuario:{type:String,re:true},
});

//crear modelo
const tarea=mongoose.model("tarea", tareaSchema);

//exportar modelo
module.exports=tarea;