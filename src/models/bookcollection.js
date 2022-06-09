const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name:{
        type:String,
        required:true
    },
        author_id:{
            type:String,
            required:true
        },
        price:Number,
        rating:String

}, { timestamps: true });


module.exports = mongoose.model('Books', bookSchema) //users
