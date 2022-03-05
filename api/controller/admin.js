const modelAdmin = require('../model/admin')

const getAllAdmin = async (req,res) => {

    const getAdmin = await modelAdmin.find()
    console.log(getAdmin)
    res.send({"message":"get Admin success","data":getAdmin})
}

const getAdmin = async (req,res) => {
    const id = req.params.id
    const getAdmin = await modelAdmin.findById(id)
    console.log(getAdmin)
    res.send({"message":"get Admin success","data":getAdmin})
}
const addAdmin = async (req,res) => {
    const data = req.body
    const addItem = await modelAdmin.create(data)
    res.send({"message":"addAdmin success"})
}
const updateAdmin = async (req,res) => {
    const data = req.body
    const id = req.params.id
    const updateItem = await modelAdmin.findByIdAndUpdate(id,data)
    res.send({"message":"updateAdmin success"})
}
const deleteAdmin = async (req,res) => {
    const id = req.params.id
    const deleteItem = await modelAdmin.findByIdAndDelete(id)
    res.send({"message":"deleteAdmin success"})
}

const loginAdmin = async (req,res)=>{
    const data = req.body
    const findAdmin = await modelAdmin.findOne({
        emailAdmin:data.emailAdmin,
        password:data.password
    })
    if(findAdmin){
        return res.send({"message":"login success","isLogin":true,"admin":findAdmin})
    }else{
        return res.send({"message":"login failure","isLogin":false})
    }
}

module.exports = {
    getAllAdmin,
    getAdmin,
    addAdmin,
    updateAdmin,
    deleteAdmin,
    loginAdmin,
}