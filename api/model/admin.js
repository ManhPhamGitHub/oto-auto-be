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
    },
    role:{
        type:String,
        default:"admin"
        // 1 : admin , 2 : superAdmin
    }
}) 

module.exports = mongoose.model('admin',newSchema)

