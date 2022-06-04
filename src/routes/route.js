const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { route } = require('express/lib/application');

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)   res.send('My first ever api!')
// });

// router.get('/hello', function (req, res) {
   
//     res.send('Hello there!')
// });

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })
router.get('/movies', function(req, res){
    let arr=['conjuring','rang de basanti','jungle book','anek']
    res.send(arr)

});
router.get('/films', function(req, res){
    let films=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
         'id': 2,
        'name': 'Incendies'
       }, {
       ' id' :3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
       'name':' Finding Nemo'
       }]
       
        res.send(films)
    })
    router.get('/films/:filmid', function(req, res){
        let films=[ {
            'id': 1,
            'name': 'The Shining'
           }, {
             'id': 2,
            'name': 'Incendies'
           }, {
           ' id' :3,
            'name': 'Rang de Basanti'
           }, {
            'id': 4,
           'name':' Finding Nemo'
           }]
           
        let filmindex=req.params.filmid
        function idlookup(x){
            return x.id;
        }
        let getid =films.map(idlookup)
        letfinalfilms=" "
        if(filmindex <=getid.length){
            finalfilm=films[filmindex-1]
        }else{
            finalfilm=('please enter number equal to or below: = '+getid.length+
            'beacuse no movie exists with the entered id')
        }
        res.send(finalfilm)

      
    })



module.exports = router;
// adding this comment for no reason