const mongoose = require('mongoose')
const newSchema = new mongoose.Schema({
    nameProduct:{
        type:String
    },
    priceProduct:{
        type:Number,
    },
    discountProduct:{
        type:Number,
        default:0
    },
    amountProduct:{
        type:Number,
        default:0
    },
    typeProduct:{
        type:String
    },
    color:{
        type:String
    },
    autoCompany:{
        type:String
    },
    imageProduct:{
        type:Array
    },
    reviewsCustomer:[{
        type: mongoose.Types.ObjectId,
        ref: 'customer'
    }]
}) 

module.exports = mongoose.model('product',newSchema)

