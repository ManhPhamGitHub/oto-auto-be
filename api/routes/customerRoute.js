const controller = require("../controller/customer")

const Router = (app)=>{
    app.get('/customer',controller.getCustomer)
    app.post('/customer',controller.addCustomer)
    app.put('/customer/:id',controller.updateCustomer)
    app.delete('/customer/:id',controller.deleteCustomer)
    app.post('/customer/login',controller.loginCustomer)
    app.put('/customer/changePassword/:id',controller.changePasswordCustomer)
}

module.exports = Router