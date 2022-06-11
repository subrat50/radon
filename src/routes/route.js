const express = require('express');
const router = express.Router();

const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.get("/login",commonMW.login)
router.get("/view",commonMW.view)
router.get("/feed",commonMW.feed)
router.get("/freinds",commonMW.freinds)


module.exports = router;