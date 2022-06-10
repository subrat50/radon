const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishController=require("../controllers/publishercontroller")
const publish=require("../models/publisherModel")
const authore=require("../models/authorModel")
const book=require("../models/bookModel");
const bookModel = require('../models/bookModel');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor",authorController.createAuthor)


router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.post("/getPublish",publishController.getPublish)
router.put("/createBook", bookController.updateBook  )

router.put("/updatePrice", async function(req,res){
    let data= await authore.updateMany({ratings:{$gt:3.5}},{$inc:{price:10}})
    res.send({data})
})

module.exports = router;