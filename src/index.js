const express  = require('express');
const conectarBD = require('../config/db');
const cors =require('cors');

const app = express();


conectarBD();
app.use(cors());

app.use(express.json());
app.use('/api/clientes', require('../routes/rutas'));
app.use('/api/ubicaciones', require('../routes/routesUbi'));


app.listen(3000,() => {
    console.log('el servidor esta conectado= http://localhost:3000/ ')
})

app.get('/',(req,res)=>{
    res.send('Hola Mundo desde la web');
})