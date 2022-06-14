// const { count } = require("console")
const { isValidObjectId } = require("mongoose")
const orderModel = require("../models/orderModel")


const createOrder= async function (req, res,next) {
    let userId = req.body.userId
    let productId=req.body.productId


    let userData=await orderModel.findById(userId)
    if(!userData){
        res.send({msg:"request is missing a mandatory header"})
    }else{
        next()
    }
    let productData=await orderModel.findById(productId)
    if(!productData){
        res.send({msg:"request is missing a mandatory"})
    }else{
        next()
    }
    if(isValidObjectId(userData || productData)){
        res.send({msg:"error"})
    }
    

}

module.exports.createOrder= createOrder
