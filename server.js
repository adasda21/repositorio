import express from 'express';
import cors from 'cors';  
import dotenv from 'dotenv';  
import { EnrutadorArticulo } from './routes/articulosRoutes.js';
import { EnrutadorCliente } from './routes/clientesRoutes.js';
import { EnrutadorUsuario } from './routes/usuariosRoutes.js';
import { ArticuloModel } from './models/Articulo_MDB.js';
import { UsuarioModel } from './models/Usuario_MDB.js';
import { ClienteModel } from './models/Cliente_MDB.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Middleware para imprimir en consola las peticiones GET
app.use((req, res, next) => {
    if (['GET', 'POST', 'PUT'].includes(req.method)) {
        console.log(`${req.method} request received:`, req.url);
    }
    next();
});

app.use('/api/articulos', EnrutadorArticulo(ArticuloModel));
app.use('/api/usuarios', EnrutadorUsuario(UsuarioModel));
app.use('/api/clientes', EnrutadorCliente(ClienteModel));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
