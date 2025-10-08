const express  =require("express")
const controller = require("../controller/bus")
router = express.Router()
router.get("/available/:seats",controller.show_seats)
router.post("/",controller.add_bus)
module.exports = router
