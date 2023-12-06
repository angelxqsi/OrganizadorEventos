//Invocamos express
const express = require('express');
const app = express();

//urlencode para capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'))

//establecer el motor de plantilla
app.set('view engine', 'ejs');

//invocar el bcryptjs
const bcryptjs = require('bcryptjs');

//var sesion
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized:true
}));

// - invocar el modulo de conexion de la bd
const connection = require('./database/db');

//estableciendo las rutas

app.get('/', (req, res)=>{
    res.render('index');
})
app.get('/login', (req, res)=>{
    res.render('login');
})
app.get('/register', (req, res)=>{
    res.render('register');
})
app.get('/review', (req, res)=>{
    res.render('review');
})
app.get('/About', (req, res)=>{
    res.render('About');
})
app.get('/eventos', (req, res)=>{
    res.render('eventos');
})
app.get('/invitacion', (req, res)=>{
    res.render('invitacion');
})
app.get('/soporte', (req, res)=>{
    res.render('soporte');
})
app.get('/patrocinios', (req, res)=>{
    res.render('patrocinios');
})
app.get('/eventosRecientes', (req, res)=>{
    res.render('eventosRecientes');
})

//Este era para la invitacion pero al descomentarlo y en mi .env poner mis variables de entorno, como que chocan con los 
//de mi inicio de sesion y deja de funcinar mi registro por eso que lo tengo comentado haha.
// Manejar la solicitud POST para /invitacion
/*app.post('/invitacion', async (req, res) => {
    const eventName = req.body.eventName;
    const motivo = req.body.motivo;
    const eventDate = req.body.eventDate;
    const horaDate = req.body.horaDate;
    const eventAddress = req.body.eventAddress;
    const eventDescription = req.body.eventDescription;
    const confirmAttendance = req.body.confirmAttendance;

    connection.query('INSERT INTO invitaciones SET ?', {
        eventName: eventName,
        motivo: motivo,
        eventDate: eventDate,
        horaDate: horaDate,
        eventAddress: eventAddress,
        eventDescription: eventDescription,
        confirmAttendance: confirmAttendance
    }, (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al crear invitación');
        } else {
            res.send('Invitación creada exitosamente'); // Otra respuesta según sea necesario
        }
    });
});*/


//Registracion
app.post('/register', async (req, res) => {
    const full_name = req.body.full_name;
    const user = req.body.user;
    const edad = req.body.edad;
    const correo = req.body.correo;
    const ciudad = req.body.ciudad;
    const pass = req.body.pass;
    let passwordHash = await bcryptjs.hash(pass, 8)
    connection.query('INSERT INTO usuarios SET ?', {
        full_name: full_name,
        user: user,
        edad: edad,
        correo: correo,
        ciudad: ciudad,
        pass: passwordHash
    }, async (error, results) => {
        if (error) {
            console.log(error);
            res.render('register', {
                alert: true,
                alertTitle: "Registration",
                alertMessage: "Error al registrarse", 
                alertIcon: 'error',
                showConfirmButton: true, 
                timer: 1500, 
                ruta: ''
            });
        } else {
            res.render('register',{
                alert: true,
                alertTitle: "Registration",
                alertMessage: "¡Successfull Registration!",
                alertIcon: 'success',
                showConfirmButton:false,
                timer:1500,
                ruta:''
            });
        }
    });
});

// Autenticación por correo electrónico o nombre de usuario
app.post('/auth', async (req, res) => {
    const correoOUser = req.body.correoOuser;
    const pass = req.body.pass;

    if (correoOUser && pass) {
        // Consulta si el correo o usuario existe en la base de datos
        connection.query('SELECT * FROM usuarios WHERE correo = ? OR user = ?', [correoOUser, correoOUser], async (error, results) => {
            if (error) {
                console.log(error);
                res.render('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Error en la autenticación",
                    alertIcon: "error",
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                });
            } else {
                if (results.length === 0 || !(await bcryptjs.compare(pass, results[0].pass))) {
                    res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Correo/Usuario o contraseña incorrectos",
                        alertIcon: "error",
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'
                    });
                } else {
                    req.session.loggedin = true;
                    req.session.name = results[0].name;

                    res.render('login', {
                        alert: true,
                        alertTitle: "Conexión Exitosa",
                        alertMessage: "¡Inicio de sesión correcto!",
                        alertIcon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                        ruta: ''
                    });
                }
            }
        });
    } else {
        res.render('login', {
            alert: true,
            alertTitle: "Advertencia",
            alertMessage: "¡Por favor ingrese un correo/usuario y contraseña!",
            alertIcon: "warning",
            showConfirmButton: true,
            timer: false,
            ruta: 'login'
        });
    }
});



//
app.get('/', (req, res)=>{
    if(req.session.loggedin){
        res.render('index', {
            login: true,
            name: req.session.name
        })
    }
})



app.listen(4000, (req, res)=>{
    console.log('SERVER RUNNING IN http://localhost/4000');
})