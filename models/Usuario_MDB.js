import mongoose, { model } from "mongoose";
import { conexion } from "../helpers/conexion.js";
import { response } from "express";
import { number } from "zod";

conexion();
const usuarioSchema = new mongoose.Schema(
    {
       // id: Number,
        nombre: String,
        correo: String,
        password: String,
     }//,
    // {
    //     versionkey: false
    // }

)

const Usuario = model('Usuario', usuarioSchema);

export class UsuarioModel {
    static async getAll() {
        try {
            return Usuario.find();
        }
        catch (e) {
            console.log(e);
        }
    }
    static async getOneByID(id) {
        try {
            return await Usuario.findById(id);
        }
        catch (e) {
            console.log(e);
        }
    }

    static async delete(id) {
        try {
            return await Usuario.deleteOne({ _id: id });
        } catch (e) {
            console.log(e);
        }
    }

    static async create(usuario) {
        if (!usuario.success) {
            return Error;
        }

        const nuevoUsuario = {
            ...usuario.data
        };

        const usuarioGuardar = new Usuario(nuevoUsuario);
        try {
            await usuarioGuardar.save();
            return nuevoUsuario;
        }
        catch (e) {
            console.log(e);
        }
    }

    static async update(id, usuario) {
        if (!usuario.success) {
            return Error;
        }

        const nuevoUsuario = {
            ...usuario.data
        };

        try {
            await Usuario.updateOne({ _id: id }, nuevoUsuario);
            return nuevoUsuario;
        }
        catch (e) {
            console.log(e);
        }
    }
}