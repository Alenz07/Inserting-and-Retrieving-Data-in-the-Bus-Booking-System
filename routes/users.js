const express= require("express")
router = express.Router()
controller = require("../controller/user")
router.get("/",controller.show_user)
router.post("/",controller.add_user)
module.exports = router
