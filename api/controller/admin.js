const modelAdmin = require('../model/admin')

const getAllAdmin = async (req, res) => {
    try {
        const getAdmin = await modelAdmin.find()
        res.send({ "message": "get Admin success", "data": getAdmin })
    } catch (error) {
        res.send({"error":error})

    }
}

const getAdmin = async (req, res) => {
    try {
        const id = req.params.id
        const getAdmin = await modelAdmin.findById(id)
        res.send({ "message": "get Admin success", "data": getAdmin })
    } catch (error) {
        res.send({"error":error})

    }
}
const addAdmin = async (req, res) => {
    try {
    const data = req.body
    const findAdmin = await modelAdmin.findOne({ emailAdmin: data.emailAdmin })
    if(findAdmin){
        return res.send({"error":"error","message":"tai khoan da ton tai","success": false})
    }
    const addItem = await modelAdmin.create(data)
    res.send({ "message": "addAdmin success", "success": true })
    } catch (error) {
        res.send({"error":error})

    }
}
const updateAdmin = async (req, res) => {
    try {
        const data = req.body
        const id = req.params.id
        const updateItem = await modelAdmin.findByIdAndUpdate(id, data)
        res.send({ "message": "updateAdmin success" })
    } catch (error) {
        res.send({"error":error})
    }
}
const deleteAdmin = async (req, res) => {
    try {
        const id = req.params.id
        const deleteItem = await modelAdmin.findByIdAndDelete(id)
    res.send({ "message": "deleteAdmin success" })
    } catch (error) {
        res.send({"error":error})
    }
}

const loginAdmin = async (req, res) => {
    try {
        const data = req.body
        const findAdmin = await modelAdmin.findOne({
            emailAdmin: data.emailAdmin,
            password: data.password
        })
        if (findAdmin) {
            return res.send({ "message": "login success", "isLogin": true, "admin": findAdmin })
        } else {
            return res.send({ "message": "login failure", "isLogin": false })
        }
    } catch (error) {
        res.send({"error":error})
    }
}


const authorAdmin = async (req, res) => {
    try {
        const data = req.body // {role} 
        const id = req.params.id 
        const updateItem = await modelAdmin.findByIdAndUpdate(id, { role: data.role })
        const getAdmin = await modelAdmin.find()
        res.send({ "message": "authorization admin success" ,"data": getAdmin})
    } catch (error) {
        res.send({ "error": error })
    }
}

module.exports = {
    getAllAdmin,
    getAdmin,
    addAdmin,
    updateAdmin,
    deleteAdmin,
    loginAdmin,
    authorAdmin
}