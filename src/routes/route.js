const express = require('express');
const router = express.Router();
const Bookcollection= require("../models/bookcollection.js")
const bookName= require("../controllers/bookName");

router.post("/creatnewBooks", bookName.creatnewBooks)


router.get("/getlistBooks", bookName.getlistBooks)
    

module.exports = router;