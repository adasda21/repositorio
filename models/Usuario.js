import { usuarios } from "../datos/usuarios.js";
let usuariosDevolver = usuarios;
export class Usuario {
    static getAll() {
        return usuariosDevolver;
    }
    static getOneBiID(id) {
        return usuariosDevolver.find(usuario => usuario.id == id);
    }
    static delete(id) {
        return usuariosDevolver.filter(usuario => usuario.id != id);
    }
    static create(usuario) {
        if (!usuario.success) {
            return Error;
        }
        const nuevoUsuario = {
            ...usuario.data
        };
        usuariosDevolver = [...usuariosDevolver, nuevoUsuario];
        return nuevoUsuario;
    }
    static update(id, usuario) {
        if (!usuario.success) {
            return Error;
        }
        const usuarioIndice = usuariosDevolver.findIndex(usuario => usuario.id == id);
        if (usuarioIndice == -1) {
            return Error;
        }
        const nuevoUsuario = {
            ...usuariosDevolver[usuarioIndice],
            ...usuario.data
        };
        usuariosDevolver[usuarioIndice] = nuevoUsuario;
        return nuevoUsuario;
    }
}