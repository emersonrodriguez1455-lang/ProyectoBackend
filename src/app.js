import express from 'express'; //express framework que crea el servidor
import dontenv from 'dotenv'; //dotenv nos permite utilizar nuestras variables de entorno
import cors from 'cors'; //cors nos sirve para las conexiones futuras con el backend
import authRoutes from './routes/authRoutes'; //uso de nuestras apis
import ticketRoutes from './routes/ticketRoutes'; 

dontenv.config();  //configura laas variables de entorno
const app = express(); //crea las instancias para levantar el servidor

app.use(express.json()); // transforma las llamadas a json
app.use(cors()); //permite conexiones futuras con el frontend seguras sin las restricciones


//configuracion de como aparecera el url

//app.use(nombre que aparecera en la web 'api/rutas', el nombre de la variable)

app.use('api/auth',authRoutes);
app.use('api/tickets',ticketRoutes);

const PORT = process.env.PORT || 3000; // decimos que que use el puerto de nuestro .env o que se conecte en el puerto 3000 localhost

app.listen(PORT, ()=>{
    console.log(`sevidor corriendo en ${PORT}`);
})