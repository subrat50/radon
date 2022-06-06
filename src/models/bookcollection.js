const mongoose = require('mongoose');

const BOOKsSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        unique: true
    },
    authoreName:String,
    catagory:String,
    year:String
    
}, { timestamps: true });

module.exports = mongoose.model('Books',BOOKsSchema) //users



// String, Number
// Boolean, Object/json, array