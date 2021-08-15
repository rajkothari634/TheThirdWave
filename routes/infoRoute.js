const router = require("express").Router();
const GetDateInfo = require("../controllers/info/getDateInfo");
const GetStateInfo = require("../controllers/info/getStateInfo");
const PinPointState = require("../controllers/info/pinPointState");

router.get("/getDateInfo", GetDateInfo.getDateInfo);
router.get("/getStateInfo", GetStateInfo.getStateInfo);
router.get("/pinPointState", PinPointState.pinPointState);

module.exports = router;