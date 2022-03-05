const mongoose = require('mongoose')
const newSchema = new mongoose.Schema({
    idCustomer:{
        type: mongoose.Types.ObjectId,
        ref: 'customer'
    },
    listProduct:[{
        type: mongoose.Types.ObjectId,
        ref: 'product'
    }]
}) 

module.exports = mongoose.model('cart',newSchema)

