const { count } = require("console")
const Authorecollection= require("../models/authorCollection")
const bookcollection = require("../models/bookcollection")
const BookCollection=require("../models/bookcollection")



const createAuthore=async function(req,res){
    let data= req.body
    let savedData=await Authorecollection.create(data)
    res.send({msg:savedData})
}

const createBookModel=async function(req,res){
    let book=req.body
    let savedBook=await BookCollection.create(book)
    res.send({msg:savedBook})
}
const listOfBooks=async function(req,res){
    let listBooks=await Authorecollection.find({ author_name:"Chetan Bhagat"}).select( "author_id")
    let booksName=await BookCollection.find({author_id:listBooks[0].author_id})
    res.send({msg:booksName})
}

const nameList=async function(req,res){
    let priceofList=await BookCollection.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let authoreName=await Authorecollection .find({author_id:priceofList.author_id}).select("author_id")
    
    res.send({msg: authoreName})
}
const authoreName=async function(req,res){
    let data=await BookCollection.find({price : {$gte:50 , $lte:100}}).select("author_id")
    
    
    res.send({msg:data})
}
const listofAuthore= async function(req,res){
    let a=await Authorecollection.find({age:{$gt:50} })
    let b=await BookCollection.find({author_id:a[0].author_id})
    res.send({msg:b})
}








module.exports.createAuthore= createAuthore
module.exports.createBookModel=createBookModel
module.exports.listOfBooks=listOfBooks
module.exports.nameList=nameList
module.exports.authoreName=authoreName
module.exports.listofAuthore=listofAuthore




// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE
