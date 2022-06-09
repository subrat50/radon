const express = require('express');
const router = express.Router();
const BookController=require("../controllers/bookController");
const AuthorCollection = require('../models/authorCollection');
const bookcollection = require('../models/bookcollection');

router.post("/createAuthore",BookController.createAuthore)
router.post("/createBookModel",BookController.createBookModel)
router.get("/listOfBooks",BookController.listOfBooks)
router.get("/nameList",BookController.nameList)
router.get("/authoreName",BookController.authoreName)
router.get("/listofAuthore",BookController.listofAuthore)


// // //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;