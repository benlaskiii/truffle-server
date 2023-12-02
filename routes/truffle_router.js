const express = require("express");
const router = express.Router();

const truffle_controller = require("../controllers/truffle_controller");

router.get("/",truffle_controller.get_all_mushroom);
router.get("/location/:latitude/:longitude",truffle_controller.get_nearby_mushroom);

module.exports = router;