//crear esquema y modelo asociado a mongoose

const mongoose=require("mongoose");
const {Schema}=mongoose;

const userSchema=new Schema({
    name: {type:String, required:true},
    username:{type:String, required:true},
    rol:{type:String, required:true},
});

//crear modelo
const usuario=mongoose.model("usuario", userSchema);

//exportar modelo
module.exports=usuario;
