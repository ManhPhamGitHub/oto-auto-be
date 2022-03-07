const controller = require("../controller/cart")
var cors = require('cors')

const Router = (app)=>{
    app.get('/cart/:id',cors(),controller.getCart)
    app.post('/cart',controller.addCart)
    app.put('/cart/:id',controller.updateCart)
    app.delete('/cart/:id',controller.deleteCart)
}

module.exports = Router