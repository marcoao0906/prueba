const usuario=require("../models/usuario");



module.exports.get_users=(req,res)=>{
    console.log("Ruta get");
    //res.send("ruta get");
    usuario.find().then((response)=>{
        res.send(response);
        console.log(response);
    }).catch((error)=>{
        console.log(error);
        res.status(400).json({error});
    });
};


module.exports.login=(req,res)=>{
    const {name}=req.params;
    usuario.find({username:name}).then((response)=>{
        //console.log(response[0].username);
        res.send(response);
    }).catch((error)=>{
        res.status(400).json(error);

    });

}

module.exports.create_user=(req,res)=>{
    const {name,username,rol}=req.body;
    console.log(req.body);
    //res.send("post ok");
    usuario.create({
        name,
        username,
        rol,
    }).then((response)=>{
        res.status(200).json(response);
    }).catch((error)=>{
        res.status(400).json(error);
    });
};

module.exports.update_user=(req,res)=>{
    const {name, username, rol, _id}=req.body;
    //console.log(req.body);
    usuario.updateOne(
        {_id},
        {
            $set:{
                name,
                username,
                rol,
            },
        }
    ).then((response)=>{
        res.status(200).json(response);

    }).catch((error)=>{
        res.status(400).json(error);
    })
    //res.send("update");
};

module.exports.delete_user=(req,res)=>{
    console.log(req.params);
    const {id}=req.params;
    usuario.deleteOne({_id:id}).then((response)=>{
        res.status(200).json(response);

    }).catch((error)=>{
        res.status(400).json(error);

    });
};






