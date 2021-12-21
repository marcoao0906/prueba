const {Router}=require("express");
const projectController=require("../controllers/projectController")

const router=Router();

//crear rutas para proyectos
router.get("/obtener-proyectos", projectController.get_projects );
router.get("/proyectos-de-usuario/:name", projectController.get_projects_by_user );

router.post("/crear-proyecto", projectController.create_project );
router.patch("/actualizar-proyecto", projectController.update_project );
router.delete("/borrar-proyecto/:id", projectController.delete_project );



module.exports=router;

