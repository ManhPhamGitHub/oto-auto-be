const mongoose = require('mongoose')
const newSchema = new mongoose.Schema({
    nameAdmin:{
        type:String
    },
    phoneAdmin:{
        type:String,
    },
    emailAdmin:{
        type:String
    },
    password:{
        type:String
    },
    revenueDay:{
        type:Number,
        default:0
    }
}) 

module.exports = mongoose.model('admin',newSchema)

