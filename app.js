var express = require('express'),
    swig = require('swig'),
    app = express()

app.engine('html',swig.renderFile)

app.set('view engine', 'html')
app.set('views',__dirname + '/views')

app.get('/',function(req,res){
  var sampleHtml = '<h2>This is a test</h2>'
  res.render('index')
})

app.listen(3000, function(){
  console.log('server listening on port 3000')
})
