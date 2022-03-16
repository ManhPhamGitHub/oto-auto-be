const controller = require("../controller/admin")

const Router = (app)=>{
    app.get('/getalladmin',controller.getAllAdmin)
    app.get('/admin/:id',controller.getAdmin)
    app.post('/admin',controller.addAdmin)
    app.put('/admin/:id',controller.updateAdmin)
    app.delete('/admin/:id',controller.deleteAdmin)
    app.post('/admin/login',controller.loginAdmin)
    app.put('/admin/author',controller.authorAdmin)

}

module.exports = Router