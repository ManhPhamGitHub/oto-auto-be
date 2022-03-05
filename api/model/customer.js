const mongoose = require('mongoose')
const newSchema = new mongoose.Schema({
    nameCustomer:{
        type:String
    },
    phoneCustomer:{
        type:String,
    },
    emailCustomer:{
        type:String
    },
    password:{
        type:String
    },
    reviewsProduct:[{
        type: mongoose.Types.ObjectId,
        ref: 'product'
    }],
    idCart:{
        type: mongoose.Types.ObjectId,
        ref: 'cart'
    },
    listOrder:[{
        type: mongoose.Types.ObjectId,
        ref: 'order'
    }],
}) 

module.exports = mongoose.model('customer',newSchema)

