const jwt = require('jsonwebtoken')

const verify = (req,res,next) =>{
    const authenHeader = req.headers['authorization']
    const token = authenHeader.split(' ')[1]
    if(!token) res.send("wrong token")
    jwt.verify(token,'RESTFULAPIs',(error,data)=>{
        if(error) res.status(403)
        next()
    })
}

const isAdmin = async (req,res,next) =>{
    const authenHeader = req.headers['authorization']  
    const token = authenHeader.split(' ')[1]
    const user = await jwt.verify(token, 'RESTFULAPIs')
    if(user.user && user.user.isAdmin){
    return next()
    }
    res.send({"error":"chi co admin thoi ban ei"})
}

module.exports = {
    verify,
    isAdmin
}