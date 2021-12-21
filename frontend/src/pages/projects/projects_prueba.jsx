import {useState} from "react";

const Projects=()=>{
    const [projects,setProjects]=useState([
        {name:"proyecto1", descrption:"Proyecto1"},
        {name:"proyecto2", descrption:"Proyecto2"},
        {name:"proyecto3", descrption:"Proyecto3"},
    ]);



    return (
        <div className="p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal mb-5">Tus proyectos</h1>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {projects.map((proyecto)=>{
                    return(
                        <div class="card text-center bg-success">
                            <div className="card-header text-white">
                            {proyecto.name}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{proyecto.descrption}</h5>
                                <p class="card-text">descripcion</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            <div class="card-footer text-muted">
                                fecha de finalizacion
                            </div>
                        </div>
                    )}
                )}                
                
            </div>
        </div>
    )
}

export default Projects_prueba;