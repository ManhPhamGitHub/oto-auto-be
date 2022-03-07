const modelOrder = require('../model/order')
const modelCustomer = require('../model/customer')

const getOrder = async (req, res) => {
    try {
        const textSearch = req.query.q
        const regex = { name: ({ $regex: textSearch, $options: 'i' }) }
        const getOrder = await modelOrder.find(regex, { "__v": 0 }).populate({
            path: 'idCustomer listProduct',
        })
        res.send({ "message": "get Order success", "data": getOrder })
    } catch (error) {
        res.send({"error":error})
    }
   
}
const addOrder = async (req, res) => {
    try {
    const data = req.body
    console.log(data)
    const addItem = await modelOrder.create(data)
    console.log(addItem)
    const customer = await modelCustomer.findByIdAndUpdate(data.idCustomer,
        { $push: { listProduct:addItem._id} })  
        console.log(customer)
    const textSearch = req.query.q
    const regex = {name:({$regex:textSearch,$options:'i'})}
    const getOrder = await modelOrder.find(regex, { "__v": 0 }).populate({
        path: 'idCustomer',
    })
    res.send({ "message": "add Order success", "data": getOrder })
    } catch (error) {
        res.send({"error":error})
    }  
}

const updateOrder = async (req, res) => {
    try {
    const data = req.body
    const id = req.params.id
    const updateItem = await modelOrder.findByIdAndUpdate(id, data)
    const textSearch = req.query.q
    const regex = {name:({$regex:textSearch,$options:'i'})}
    const getOrder = await modelOrder.find(regex, { "__v": 0 }).populate({
        path: 'idCustomer listProduct',
    })
    res.send({ "message": "update Order success", "data": getOrder })
    } catch (error) {
        res.send({"error":error})

    }
    
}

const deleteOrder = async (req, res) => {
    try {
        const id = req.params.id
    const deleteItem = await modelOrder.findByIdAndDelete(id)
    await modelCustomer.findByIdAndUpdate(data.idCustomer,
        { $pull: { listProduct: addItem._id } })

    const textSearch = req.query.q
    const regex = {name:({$regex:textSearch,$options:'i'})}
    const getOrder = await modelOrder.find(regex, { "__v": 0 }).populate({
        path: 'idCustomer listProduct',
    })
    res.send({ "message": "delete Order success", "data": getOrder })
    } catch (error) {
        res.send({"error":error})
    }
}

module.exports = {
    getOrder,
    addOrder,
    updateOrder,
    deleteOrder
}