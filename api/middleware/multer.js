const multer = require('multer')

const uploadFile = (app)=>{

let diskStore = multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log(file)
      cb(null,path.join(__dirname,'public/images'))
    },
    filename:(req,file,cb)=>{
      cb(null,file.originalname)
    }
  })
  const upload = multer({ storage: diskStore }).any()
  app.use(upload)}

module.exports = uploadFile