const express=require("express");
const mongoose=require("mongoose");
const morgan=require("morgan");
//const dotenv=require("dotenv");
const apiRoutes=require("./routes/apiRoutes");
const projectRoutes=require("./routes/projectRoutes");
const tareaRoutes=require("./routes/tareaRoutes");

//dotenv.config();

const app=express();

mongoose.connect("mongodb+srv://marcospina:read336pug946@capcom.x8wyj.mongodb.net/capcom?retryWrites=true&w=majority").then(()=>{
    console.log("conectado");
    app.listen(5000, ()=>{
    console.log("Escuchando por el puerto 5000");
})

}).catch((error)=>{
    console.log(error);
})


app.use(morgan("dev"));
//invocar middlewhere para poder recibir data desde el body
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api",apiRoutes);
app.use("/api",projectRoutes);
app.use("/api",tareaRoutes);