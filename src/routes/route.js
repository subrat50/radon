const express = require('express');
const externalModule = require('./logger')

const router = express.Router();
const subrat=require('../logger/logger')
const date =require('../util/helper')
const month=require('../util/helper')
const trim=require('../validator/formatter')
const _=require('lodash');



router.get('/test-me', function (req, res) {
subrat.welcome()
date.mydate()
date.currMonth()
date.getbatchinfo()
trim.trim()
trim.changeToLowercase()
trim.upprercase()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    let months=_.chunk(['january','february','march','april','june','july','august','september','october','november','december'], 3);
    console.log(months)
    res.send('My second ever api!')

    let number=_.tail([3,5,7,15,19,25,29,39,49,59])
    console.log(number)

    let array=_.union([34,56,76,55,89,34,56,76])
    console.log(array)

    let paires=_.fromPairs([['horror','conjuring'],['thriller','jumanji'],['horrorthiller','ruins'],['survival','put']]);
     console.log(paires)
});


router.get('/test-me2', function (req, res) {

});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason