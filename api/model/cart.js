const mongoose = require('mongoose')
const newSchema = new mongoose.Schema({
    idCustomer:{
        type: mongoose.Types.ObjectId,
        ref: 'customer'
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

module.exports = mongoose.model('cart',newSchema)

