const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    author_id:{
        type:Number,
        required:true
    },
        author_name:{
            type:String,
            required:true
        },
        age:Number,
        address:String

}, { timestamps: true });


module.exports = mongoose.model('Authore', bookSchema) //users
