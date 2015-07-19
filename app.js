var express = require('express'),
    swig = require('swig'),
    riot = require('riot'),
    hello = require('./hello-world.tag'),
    app = express()

app.engine('html',swig.renderFile)

app.set('view engine', 'html')
app.set('views',__dirname + '/views')

app.use(express.static(__dirname + '/public'))

app.get('/',function(req,res){
  var startingName = 'Susan'
  var tagOutput = riot.render(hello,{firstName:'John'})
  res.render('index',{tagContent:tagOutput,firstName:startingName})
})

app.listen(3000, function(){
  console.log('server listening on port 3000')
})
