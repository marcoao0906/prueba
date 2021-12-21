
const proyecto=require("../models/proyecto");

module.exports.get_projects=(req,res)=>{
    console.log("proyectos get");
    res.send("ruta get");
    proyecto.find().then((response)=>{
        //res.send(response);
        console.log(response);
    }).catch((error)=>{
        console.log(error);
        res.status(400).json({error});
    
    });
};

module.exports.get_projects_by_user=(req,res)=>{
    //console.log(req.params);
    const {name}=req.params;
    proyecto.find({usuario:name}).then((response)=>{
        console.log();
        res.send("estos son");
    }).catch((error)=>{
        res.status(400).json(error);

    });
}

module.exports.create_project=(req,res)=>{
    const {name,description,begin_date,usuario}=req.body;
    const fecha = new Date(Date.UTC(begin_date.year, begin_date.month - 1, begin_date.day));
    const hoy=new Date();
    console.log("hoy",hoy);
    console.log("fecha",fecha);
    if (fecha<hoy){
        console.log("La fecha de inicio del proyecto no puede ser menor a la fecha de hoy")
        fecha==new Date();
        console.log("fecha",fecha);
        console.log("hoy",hoy);

        console.log(req.body);
        //res.send("post ok");
        proyecto.create({
            name,
            description,        
            begin_date:hoy,
            finish_date:hoy,
            usuario,
        }).then((response)=>{
            res.status(200).json(response);
        }).catch((error)=>{
        res.status(400).json(error);
        });

    }else{
        proyecto.create({
            name,
            description,        
            begin_date:fecha,
            finish_date:fecha,
            usuario,
        }).then((response)=>{
            res.status(200).json(response);
        }).catch((error)=>{
        res.status(400).json(error);
        });

    };

    
};


module.exports.update_project=(req,res)=>{
    const {_id, name, description, begin_date, finish_date,usuario}=req.body;
    const fechafin = new Date(Date.UTC(finish_date.year, finish_date.month - 1, finish_date.day));
    const fecha=new Date();
    //console.log(req.body);
    proyecto.updateOne(
        {_id},
        {
            $set:{
                name,
                description,
                begin_date:fecha,
                finish_date:fechafin,
                usuario,
            },
        }
    ).then((response)=>{
        res.status(200).json(response);

    }).catch((error)=>{
        res.status(400).json(error);
    })
    //res.send("update");
};


module.exports.delete_project=(req,res)=>{
    console.log(req.params);
    const {id}=req.params;
    proyecto.deleteOne({_id:id}).then((response)=>{
        res.status(200).json(response);

    }).catch((error)=>{
        res.status(400).json(error);

    });
};