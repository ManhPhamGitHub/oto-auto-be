const controller = require("../controller/product")

const Router = (app)=>{
    app.get('/product',controller.getProduct)
    app.post('/product',controller.addProduct)
    app.put('/product/:id',controller.updateProduct)
    app.delete('/product/:id',controller.deleteProduct)
}

module.exports = Router