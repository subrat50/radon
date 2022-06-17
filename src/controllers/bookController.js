const { findByIdAndUpdate, findOneAndUpdate } = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")


const createBook= async function (req, res) {
    let book=req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
const updateBook=async function(req,res){
    let data=req.body
    let {bookId}=data
    let update=await bookModel.findOneAndUpdate({_id:bookId},{$set:{isHardCover:true}},{new:true})
    // let update=await bookModel.findByIdAndUpdate({_id:req.body.book_id},{$set:{ isHardCover:req.body.isHardCover}},{upsert:true})
    res.send(update)
}
const getBooksData= async function (req, res) {
    let authID=req.body.author_Id
    if(!authID) return res.send({msg:"plz enter a author id"})
    let authors = await bookModel.findOne( authID)
    if(!authors) return res.send({msg:"no author found with author id"})
    res.send({data: authors})

    let publishID=req.body.publisher_id
    if(!publishID) return res.send({msg:"plz enter publisher id"}) 
    let publish= await bookModel.findById(publisher_id) 
    if(!publish) return res.send({msg:"no authore found in this id"})
    res.send({data:publish})  
}

const getBooksWithAuthorDetails=async function(req,res){
    let getBooks=await bookModel.find().populate('author_id').populate('publisher_id')
    res.send(getBooks)
}



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBook=updateBook
