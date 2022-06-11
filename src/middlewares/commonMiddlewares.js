const {response} =require('express');
const login= function ( req, res,next) {
   
    res.send("Hi I am a middleware named Mid1")
    next();
}

const view= function ( req, res,next) {
    res.send("Hi I am a middleware named Mid2")
    next();
}

const feed= function ( req, res,next ) {
    res.send("Hi I am a middleware named Mid3")
    next();
}

const freinds= function ( req, res, next) {
    res.send("Hi I am a middleware named Mid4")
    next()
}

module.exports.login= login
module.exports.view= view
module.exports.feed= feed
module.exports.freinds= freinds
