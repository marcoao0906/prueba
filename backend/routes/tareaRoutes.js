const {Router}=require("express");
const taskController=require("../controllers/taskController");

const router=Router();

//crear rutas para proyectos
router.get("/obtener-tareas", taskController.get_task );
router.post("/crear-tarea", taskController.create_task );
router.patch("/actualizar-tarea", taskController.update_task );
router.delete("/borrar-tarea/:id", taskController.delete_task );



module.exports=router;