const controller = require("../controller/order")

const Router = (app)=>{
    app.get('/order',controller.getOrder)
    app.post('/order',controller.addOrder)
    app.put('/order/:id',controller.updateOrder)
    app.delete('/order/:id',controller.deleteOrder)
}

module.exports = Router