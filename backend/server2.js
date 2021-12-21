const express=require("express");
const mongoose=require("mongoose");


const app=express();

//const { MongoClient } = require('mongodb');
//const uri = "mongodb+srv://marcospina:read336pug946@capcom.x8wyj.mongodb.net/capcom?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //console.log("conectado");
  
//app.listen(5000, ()=>{
    //console.log("Escuchando por el puerto 5000");
//})
//  client.close();
//});



//conectar a la base de datos
mongoose.connect("mongodb+srv://marcospina:read336pug946@capcom.x8wyj.mongodb.net/capcom?retryWrites=true&w=majority").then(()=>{
    console.log("conectado");
    app.listen(5000, ()=>{
    console.log("Escuchando por el puerto 5000");
})

}).catch((error)=>{
    console.log(error);
})




//rest request o rutas

app.get("/primer-get", (req,res)=>{
    console.log("primer get ejecutado");
    res.send("ejecutaste el primer get");
})

app.post("/primer-post", (req,res)=>{
    console.log("primer post ejecutado");
    res.send("ejecutaste el primer post");
})

app.delete("/primer-delete", (req,res)=>{
    console.log("primer delete ejecutado");
    res.send("ejecutaste el primer delete");
})

app.put("/primer-put", (req,res)=>{
    console.log("primer put ejecutado");
    res.send("ejecutaste el primer put");
})
 