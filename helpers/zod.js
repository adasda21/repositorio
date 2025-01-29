import zod from 'zod';
const articuloSchema=zod.object({
    titulo: zod.string(),
    cuerpo: zod.string(),
    usuario: zod.string(),
})

const clienteSchema=zod.object({
    nombre: zod.string(),
    apellido: zod.string(),
    edad: zod.number(),
})

const usuarioSchema=zod.object({
    nombre: zod.string(),
    correo: zod.string(),
    password: zod.string(),
})


export const validarArticulo =(articulo)=>{
   return articuloSchema.safeParse(articulo);
}

export const validarParcial=(articulo)=>{
    return articuloSchema.partial().safeParse(articulo);
 }

export const validarCliente =(cliente)=>{
    return clienteSchema.safeParse(cliente);
 }
 export const validarParcialCliete=(cliente)=>{
    return  clienteSchema.partial().safeParse(cliente);
 }

export const validarUsuario =(usuario)=>{
    return usuarioSchema.safeParse(usuario);
 }

 export const validarParcialUsuario=(usuario)=>{
    return  usuarioSchema.partial().safeParse(usuario);
 }