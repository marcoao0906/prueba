//crear esquema y modelo asociado a mongoose

const mongoose=require("mongoose");
const {Schema}=mongoose;

const projectSchema=new Schema({
    name: {type:String, required:true},
    description:{type:String, required:true},
    begin_date:{type:Date, required:true},
    finish_date:{type:Date},
    usuario:{type:String,re:true},
});

//crear modelo
const proyecto=mongoose.model("proyecto", projectSchema);

//exportar modelo
module.exports=proyecto;