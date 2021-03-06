const mongoose = require('mongoose')
const moment = require('moment-timezone');
const dateVN = moment.tz(Date.now(), "Asia/Bangkok");
const newSchema = new mongoose.Schema({
    statusOrder:{
        type:String,
        enum:["success","failure","pending"],
        default:"pending"
    },
    timeOder:{
        type:Date,
        default:dateVN
    },
    totalPrice:{
        type:Number
    },
    idCustomer:{
            type: mongoose.Types.ObjectId,
            ref: 'customer',
            required:true
    },
    listProduct:[{
        product:{
            type: mongoose.Types.ObjectId,
            ref: 'product'
        },
        amountProduct:{
            type:Number,
            default:1
        }
        
    }]
}) 

module.exports = mongoose.model('order',newSchema)

