const authore= require("../models/authorModel")

const createAuthor= async function(req,res){
    let data=req.body
    let savedData=await authore.create(data)
    res.send({msg:savedData})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData