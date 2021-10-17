const express = require ('express'); //requiriendo express
const morgan = require('morgan'); //requirir morgan
const cors = require('cors');
const path = require('path');

const app = express(); //funcionamiento de express


//Conexión base de datos
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Lola:189000000Hh@cluster0.4lq6k.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(db => console.log('Conectado a DB'))
.catch(err => console.log(err))



//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); //trabajar con solicitudes y respuestas

//RUTA
app.use('/api', require('./routes/index'));
app.use('/user', require('./routes/personas'))

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//PUERTO
app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), () => {
    console.log('Example app listening on port '+ app.get('puerto'));
});