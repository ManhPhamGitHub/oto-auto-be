const mongoose = require('mongoose')
const moment = require('moment-timezone');
const dateVN = moment.tz(Date.now(), "Asia/Bangkok");
const newSchema = new mongoose.Schema({
    StatusOrder:{
        type:String,
        enum:["success","failure"]
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
        type: mongoose.Types.ObjectId,
        ref: 'product'
    }]
}) 

module.exports = mongoose.model('order',newSchema)

