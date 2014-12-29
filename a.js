var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log(req.query);
  res.send('Hello World')
})
app.post('/', function(req, res){
  console.log(req.query);
  console.log(req.body);
  res.send('Hello World post')
});
app.listen(3000)
