const controller = require("../controller/cart")

const Router = (app)=>{
    app.get('/cart/:id',controller.getCart)
    app.post('/cart',controller.addCart)
    app.put('/cart/:id',controller.updateCart)
    app.delete('/cart/:id',controller.deleteCart)
}

module.exports = Router