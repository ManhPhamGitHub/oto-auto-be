const modelCustomer = require('../model/customer')
const modelCart = require('../model/cart')


const getCustomer = async (req,res) => {
    const textSearch = req.query.q
    const regex = {name:({$regex:textSearch,$options:'i'})}
    const getCustomer = await modelCustomer.find(regex,{"__v": 0}).populate({
        path: 'idCart listOrder reviewsProduct'
    })
    res.send({"message":"get Customer success","data":getCustomer})
}
const addCustomer = async (req,res) => {
    try {
    const data = req.body
    console.log(data,"Dada")
    const findCustomer = await modelCustomer.findOne({emailCustomer:data.emailCustomer})
    console.log(findCustomer,"findCustomer")
    if(findCustomer){
        return res.send({"error":"error","message":"tai khoan da ton tai","success": false})
    }
    const addItem = await modelCustomer.create(data)
    console.log(addItem,"addItem")
    const addCart = await modelCart.create({idCustomer:addItem._id})
    console.log(addCart,"addCart")

    const updateCustomer = await modelCustomer.findByIdAndUpdate(addItem._id,{idCart:addCart._id}, {
        new: true
      })
      console.log(updateCustomer,"updateCustomer")

    res.send({"message":"add Customer success","data":updateCustomer,"success": true})
    } catch (error) {
        res.send({"error":error})
    }
}

const updateCustomer = async (req,res) => {
    try {
        const data = req.body
    const id = req.params.id
    const updateItem = await modelCustomer.findByIdAndUpdate(id,data)
    const textSearch = req.query.q
    const regex = {name:({$regex:textSearch,$options:'i'})}
    const getCustomer = await modelCustomer.find(regex,{"__v": 0}).populate({
        path: 'idCart listOrder reviewsProduct'
    })
    res.send({"message":"update Customer success","data":getCustomer})
    } catch (error) {
        res.send({"error":error})
    }
}

const deleteCustomer = async (req,res) => {
    try {
        const id = req.params.id
        const deleteItem = await modelCustomer.findByIdAndDelete(id)
        const textSearch = req.query.q
        const regex = {name:({$regex:textSearch,$options:'i'})}
        const getCustomer = await modelCustomer.find(regex,{"__v": 0}).populate({
            path: 'idCart listOrder reviewsProduct'
        })
        res.send({"message":"delete Customer success","data":getCustomer})
    } catch (error) {
        res.send({"error":error})
    }
}

const loginCustomer = async (req,res)=>{
    const data = req.body
console.log(data,"Dataa")
    const findCustomer = await modelCustomer.findOne({
        emailCustomer:data.emailCustomer,
        password:data.password
    })
    if(findCustomer){
        return res.send({"message":"login success","isLogin":true,"Customer":findCustomer})
    }else{
        return res.send({"message":"login failure","isLogin":false})
    }
}

const changePasswordCustomer = async (req,res) => {
    try {
    const data = req.body // {oldPassword , newPassword }
    const id = req.params.id 
    console.log(id,"id")
    const updateCustomer= await modelCustomer.findById(id)
    console.log(updateCustomer,"updateCustomer")
    if(data.oldPassword !== updateCustomer.password) {
        return res.send({"error":"m???t kh???u c?? kh??ng kh???p"})
    }
    console.log(data)
    const getCustomer = await modelCustomer.findByIdAndUpdate(id,{password:data.newPassword},{new:true})
    .populate({
        path: 'idCart listOrder reviewsProduct'
    })
    res.send({"message":"update Customer success","data":getCustomer})
    } catch (error) {
        res.send({"error":error})
    }
}

module.exports = {
    getCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    loginCustomer,
    changePasswordCustomer
}