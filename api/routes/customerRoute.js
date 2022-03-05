const controller = require("../controller/customer")

const Router = (app)=>{
    app.get('/customer',controller.getCustomer)
    app.post('/customer',controller.addCustomer)
    app.put('/customer/:id',controller.updateCustomer)
    app.delete('/customer/:id',controller.deleteCustomer)
}

module.exports = Router