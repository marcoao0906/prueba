const tarea=require("../models/tarea");
const proyecto=require("../models/proyecto");

module.exports.get_task=(req,res)=>{
    console.log("tareas get");
    //res.send("ruta get");
    tarea.find().then((response)=>{
        res.send(response);
        console.log(response);
    }).catch((error)=>{
        console.log(error);
        res.status(400).json({error});
    });
};

module.exports.create_task=(req,res)=>{
    const {name, description,project,begin_date,finish_date,usuario}=req.body;
    console.log("1 project",project);
    console.log("project",name);
    console.log("create task")  ; 
    res.send("create task")   ;

    //verificar que existe un proyecto para asignarle esa tarea
    proyecto.find({name:project}).then((response)=>{
        //res.send(response)
       // console.log("_id",_id);
        //console.log("project",project);
        //console.log(response);
        
        if (response.length>0){
            console.log("Si existe un proyecto para asignar tareas");
            const fecha = new Date(Date.UTC(begin_date.year, begin_date.month - 1, begin_date.day));
            const fechafin = new Date(Date.UTC(finish_date.year, finish_date.month - 1, finish_date.day));
            //verificar que no exista otra tarea con el mismo nombre en el mismo proyecto
            tarea.find({name:name,project:project}).then((response)=>{
                console.log(response);
                if (response.length>0){
                    console.log("ya existe esta tarea dentro de este proyecto");
                }else{
                    console.log("creando tarea nueva para el proyecto",project);
                    if (fechafin<fecha){
                        console.log("la fecha de finalizacion no puede ser menor a la fecha de inicio, se colocara la fecha de inicio")                       


                        tarea.create({
                        name,
                        description,
                        project,
                        begin_date:fecha,
                        finish_date:fecha,
                        usuario,
                        }).then((response)=>{
                        console.log(response.project);
                        proyecto.updateOne(
                            {name:response.project},
                            {
                                $set:{
                                    finish_date:fechafin,
                                },
                            }
                        );
                        
                        //res.send(response);
                        }).catch((error)=>{
                            console.log(error);
                        });
                        //actualizar fecha de finalizacion de proyecto si se requiere
                        





                    }else{
                        tarea.create({
                        name,
                        description,
                        project,
                        begin_date:fecha,
                        finish_date:fechafin,
                        usuario,
                        }).then((response)=>{
                            console.log(response);
                        
                            //res.send(response);
                        }).catch((error)=>{
                            console.log(error);
                        });

                    }
                    
                }
            }).catch((error)=>{
                console.log(error)
            })
        }else{
            console.log("no se puede puede crear tarea...proyecto no existe");
        }        
    }).catch((error)=>{
        console.log(error);
        res.status(400).json({error});
    });
};


module.exports.update_task=(req,res)=>{
    const {_id,name, description, project,begin_date, finish_date,usuario}=req.body;
    const fecha = new Date(Date.UTC(begin_date.year, begin_date.month - 1, begin_date.day));
    const fechafin = new Date(Date.UTC(finish_date.year, finish_date.month - 1, finish_date.day));
    //console.log(req.body);
    tarea.updateOne(
        {_id},
        {
            $set:{
                name,
                description,
                project,
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


module.exports.delete_task=(req,res)=>{
    console.log(req.params);
    const {id}=req.params;
    tarea.deleteOne({_id:id}).then((response)=>{
        res.status(200).json(response);

    }).catch((error)=>{
        res.status(400).json(error);

    });
};