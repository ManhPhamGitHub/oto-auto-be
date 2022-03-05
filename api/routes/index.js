const productRoute = require("./productRoute")
const adminRoute = require('./adminRoute')
const orderRoute = require('./orderRoute')
const customerRoute = require('./customerRoute')
const cartRoute = require('./cartRoute')

const Router = (app)=>{
    productRoute(app)
    adminRoute(app)
    orderRoute(app)
    customerRoute(app)
    cartRoute(app)

}

module.exports = Router