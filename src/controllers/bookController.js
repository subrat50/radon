const { findByIdAndUpdate } = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")


const createBook= async function (req, res) {
    let book=req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
const updateBook=async function(req,res){
    let update=await bookModel.findByIdAndUpdate({_id:req.body.book_id},{$set:{ isHardCover:req.body.isHardCover}},{upsert:true})
res.send(update)
}
const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails=async function(req,res){
    let getBooks=await bookModel.find().populate('author_id').populate('publisher_id')
    res.send(getBooks)
}



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBook=updateBook
