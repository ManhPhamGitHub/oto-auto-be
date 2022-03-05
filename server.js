var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  multer = require('multer'),
  path = require('path')
  mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/quiz_app',
{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log("Connected !!!")
}).catch(err => {
  console.log(err);
});

app.use(cors())
app.use(bodyParser.json());

//  upload file multer
app.use(express.static('public/images'))

let diskStore = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,path.join(__dirname,'public/images'))
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  }
})

const upload = multer({ storage: diskStore }).any()
app.use(upload)

// routes all
var routes = require('./api/routes');
 routes(app);




app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Server started on: ' + port);
