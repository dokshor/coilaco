var express = require('express');
var path = require('path');
var app = express();

const port = 3000;

app.use(express.static('./public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/home', { title: 'About dogs', message: 'Dogs rock!' });
});


app.listen(port, function() {
    console.log('Web de Coilaco corriendo en el puerto ' + port);
});