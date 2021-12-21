const {Router}=require("express");
const apiController=require("../controllers/apiController")

const router=Router();


//crear rutas para usuarios

router.get("/obtener-usuarios", apiController.get_users );
router.get("/login/:name", apiController.login);
router.post("/crear-usuario", apiController.create_user );
router.patch("/actualizar-usuario", apiController.update_user );
router.delete("/borrar-usuario/:id", apiController.delete_user );






module.exports=router;
