const {url} = require('../config')
const modelProduct = require('../model/product')
const modelCustomer = require('../model/customer')
const modelCart = require('../model/cart')


const path = require("path")
const fs = require('fs')
const getProduct = async (req,res) => {
    try {
        let textSearch = req.query.q
        const regex = {name:({$regex:textSearch,$options:'i'})}
        const getProduct = await modelProduct.find(regex,{"__v": 0}).populate({
            path:"reviewsCustomer"
        })
        res.send({"message":"get product success","data":getProduct})
    } catch (error) {
        res.send({"error":error})
    }
   
}
const addProduct = async (req,res) => {
    try {
    let file = req.files
    let data = req.body
    let arrImg = []
    for(let i = 0; i < file.length; i++){
        var linkImg = `${url}${file[i].filename}`
        arrImg.push(linkImg)
    }
    console.log(arrImg)
    data["imageProduct"] = arrImg
    const addItem = await modelProduct.create(data)

    let textSearch = req.query.q
    const regex = {name:({$regex:textSearch,$options:'i'})}
    const getProduct = await modelProduct.find(regex,{"__v": 0}).populate({
        path:"reviewsCustomer"
    })
    res.send({"message":"addProduct success","data":getProduct})
    } catch (error) {
        res.send({"error":error})
    }
    
}
const updateProduct = async (req,res) => {
    try{
        let id = req.params.id
        let file = req.files
        let data = req.body
        let arrImg = []
        console.log(`${url}${file[0].filename}`)
        for(let i = 0; i < file.length; i++){
            var linkImg = `${url}${file[i].filename}`
            arrImg.push(linkImg)
        }
        const findUploadItem = await modelProduct.findById(id)
        const oldImgUrl = findUploadItem.imageProduct
        for(var i = 0;i<oldImgUrl.length; i++){
            fs.unlink(path.join(__dirname,`public/images/${oldImgUrl[i].slice(url.length)}`), () => {})
        }
        data["imageProduct"] = arrImg
        let updateItem = await modelProduct.findByIdAndUpdate(id,data)

        let textSearch = req.query.q
        const regex = {name:({$regex:textSearch,$options:'i'})}
        const getProduct = await modelProduct.find(regex,{"__v": 0}).populate({
            path:"reviewsCustomer"
        })
        res.send({"message":"updateProduct success","data":getProduct})
    }catch(error){
        res.send({"error":error})
    }
    
}
const deleteProduct = async (req,res) => {
    try {
    const id = req.params.id
    const deleteItem = await modelProduct.findByIdAndDelete(id)
    let textSearch = req.query.q
    const regex = {name:({$regex:textSearch,$options:'i'})}
    const getProduct = await modelProduct.find(regex,{"__v": 0}).populate({
        path:"reviewsCustomer"
    })
    res.send({"message":"deleteProduct success","data":getProduct})
    } catch (error) {
        res.send({"error":error})

    }
    
}


const reviewProduct = async (req, res) => {
    try {
        const review = req.body.review
    const idCustomer = req.body.idCustomer
    const idProduct = req.params.id
    const updateCustomer = await modelCustomer.findByIdAndUpdate(idCustomer,{
        $push:{
            reviewsProduct:idProduct
        }
    })
    const updateItem = await modelProduct.findByIdAndUpdate(idProduct, {
        $push:{
            reviewsCustomer:{idCustomer,review,nameCustomer:updateCustomer.nameCustomer}
        }
    })
    
    
    const textSearch = req.query.q
    const regex = {name:({$regex:textSearch,$options:'i'})}
    const getOrder = await modelProduct.find(regex, { "__v": 0 }).populate({
        path: 'reviewsCustomer',
    })
    res.send({ "message": "update Order success", "data": getOrder })
    } catch (error) {
        res.send({"error":error})
    }
    
    
}

const addProductToCart = async (req,res) => {
    const data = req.body 
    const idCart= req.params.id
    const updateCart = await modelCart.findByIdAndUpdate(idCart,{$addToSet:{
        listProduct:data.listProduct
    }},{new:true}).populate('idCustomer listProduct.product')
    res.send({"message":"update Cart success","data":updateCart})
}

module.exports = {
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    reviewProduct,
    addProductToCart
}