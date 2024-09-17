let mongoose = require("mongoose")

let blogSchema = mongoose.Schema({

    btitle : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true 
    },
    authid : {
        type : String,
        required : true
    }
}, { timestamps: true })

let blogModel = mongoose.model('blogs' , blogSchema)

module.exports = blogModel