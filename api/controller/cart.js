const modelCart = require('../model/cart')


const getCart = async (req,res) => {
    const id = req.params.id
    const getCart = await modelCart.findById(id,{"__v": 0}).populate('idCustomer listProduct.product')
    res.send({"message":"get Cart success","data":getCart})
}
const addCart = async (req,res) => {
    const data = req.body
    const addItem = await modelCart.create(data)
    const textSearch = req.query.q
    const regex = {name:({$regex:textSearch,$options:'i'})}
    const getCart = await modelCart.find(regex,{"__v": 0}).populate('idCustomer listProduct.product')
    res.send({"message":"add Cart success","data":getCart})
}

const updateCart = async (req,res) => {
    const data = req.body
    console.log(data)
    const id = req.params.id
    console.log(id)
    const updateItem = await modelCart.findByIdAndUpdate(id,data,{new:true}).populate('idCustomer listProduct.product')
    console.log(updateItem)
    res.send({"message":"update Cart success","data":updateItem})
}

const deleteCart = async (req,res) => {
    const id = req.params.id
    const deleteItem = await modelCart.findByIdAndDelete(id)
    const textSearch = req.query.q
    const regex = {name:({$regex:textSearch,$options:'i'})}
    const getCart = await modelCart.find(regex,{"__v": 0}).populate('idCustomer').populate('idCustomer listProduct.product')
    res.send({"message":"delete Cart success","data":getCart})
}


module.exports = {
    getCart,
    addCart,
    updateCart,
    deleteCart,
}