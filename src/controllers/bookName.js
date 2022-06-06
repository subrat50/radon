const Bookcollection= require("../models/bookcollection")

const creatnewBooks= async function (req, res) {
let data= req.body
let savedData= await Bookcollection.create(data)
res.send({msg:savedData })
}

const getlistBooks= async function (req, res) {
    let allBooks= await  Bookcollection.find()
    res.send({msg: allBooks})
}

 module.exports.creatnewBooks=creatnewBooks
 module.exports.getlistBooks=getlistBooks