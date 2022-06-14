
const mid1= function ( req, res, next) {
    let data=req.headers.isfreeappuser
    if(!data){
        res.send({msg:"request is missing a mandatory header"})
    }else{
        next()
    }
    
}

// const oderPurchase= function ( req, res, next) {
    // let order=req.headers.isfreeappuser
    // if(!order){
    //     res.send({msg:" request is missing a mandatory header"})
    // }else{
    //     next()
    // }
// }

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

module.exports.mid1= mid1
// module.exports.oderPurchase= oderPurchase
module.exports.mid3= mid3
module.exports.mid4= mid4
