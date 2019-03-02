'use strict';

var express = require('express');
var cors = require('cors');
var fileUpload = require('express-fileupload');
var bodyParser = require('body-parser')

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
//app.use('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload());


app.get('/', function (req, res) {
     //res.sendFile(process.cwd() + '/views/index.html');
  res.render("index.ejs")
  });

app.post('/api/fileanalyse', (req,res) => {
  return res.json({name: req.files.upfile.name, type: req.files.upfile.mimetype, size: req.files.upfile.data.toString().length})
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
