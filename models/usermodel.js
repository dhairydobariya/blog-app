let mongoose = require('mongoose')

let userschema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    }
},{ timestamps: true })

let usermodel = mongoose.model('users' , userschema)

module.exports = usermodel