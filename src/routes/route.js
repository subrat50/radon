const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weathercontroller = require("../controllers/weatherController")
const memeController=require("../controllers/memeController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getBydistricts",CowinController.getDistrictsByIdAndName)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/weather",weathercontroller.weatherController)
router.get("/changeTemprature",weathercontroller.changeTemprature)
router.get("/memesPage",memeController.memePage)
 router.post("/editMeme",memeController.editMeme)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;