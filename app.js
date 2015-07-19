var express = require('express'),
    swig = require('swig'),
    app = express()

app.get('/',function(req,res){
  res.send('Hello World')
})

app.listen(3000)
