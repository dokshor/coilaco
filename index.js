require("./config.js");
const { validate, clean, format } = require('rut.js')
var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors')
const port = 3000;

app.use(cors())
app.use(express.static('./public'));
app.options('*', cors()) // include before other routes
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());

// Database
Sequelize = require("sequelize");
sequelize = new Sequelize(process.env.DATABASE_URI + DATABASE);
require('./models/app.js');

// Homepage
app.get('/', async function(req, res) {
    // I need to count how many signup we have
    var counter = await User.count();

    res.render('pages/home', { counter: counter });
});

// Subscribers service

app.get('/subscribers', async function(req, res) {
    var limit = 100;
    var offset = 0;
    var absolutepage = 1;
    var counter = await User.count();

    if(req.params.page && parseInt(req.params.page) > 1) {
        absolutepage = parseInt(req.params.page);
        offset = (limit * absolutepage) + 1;
    }
    
    users = await User.findAll({
        limit: limit,
        offset: offset,
        order: [["id", "desc"]]
    });

    var users_to_display = [];

    for(var i=0;i<users.length;i++) {

        var dni = users[i].dni;

        dni = users[i].dni;
        dni = dni.substr(0, dni.length - 3) + "XX-X"
        users_to_display[i] = {
            fullname: users[i].fullname,
            dni: dni,
            message: users[i].message,
            created_at: users[i].created_at
        };
    }

    res.set('X-Total', counter);
    res.set('X-Limit', limit);
    res.set('X-Offset', offset);
    res.json(users_to_display);
});

app.post('/subscribers', async function(req, res) {
    var user = null;
    var success = true;
    var exists = true;
    var fullname = req.body.fullname;
    var dni = clean(req.body.dni);
    var phone = req.body.phone;
    var email  = req.body.email;
    var message = req.body.message;
    var exists_dni = await User.count({
        where: {
            dni : dni
        }
    });

    // We create the user only when the count is empty
    if(exists_dni == 0 && validate(dni)) {
        user = await User.create({ fullname: fullname, dni: dni, phone: phone, email: email, message: message  });
        exists = false;
    }
    
    res.json({
        user: user,
        success: success,
        exists: exists
    });
});

app.listen(port, function() {
    console.log('Web de Coilaco corriendo en el puerto ' + port);
});