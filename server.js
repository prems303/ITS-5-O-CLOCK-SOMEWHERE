var fs = require('fs')
var path = require('path')
var data = require('./data')
var express = require('express')
var hbs = require('express-handlebars')

var app = express()

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get("/", function (req, res) {
  res.render('index', data);
})

app.get('/page', function(req, res) {
  res.render('index', data);
})

var PORT = process.env.PORT || 3000
app.listen( PORT, function () {
 console.log('The server is running on port: ', PORT)
})
