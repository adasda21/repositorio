import mongoose, { model } from "mongoose";
import { conexion } from "../helpers/conexion.js";

conexion();
const clienteSchema = new mongoose.Schema(
    {
        id: String,
        nombre: String,
        apellido: String,
        edad: Number
    }//,
    //{
     //   versionKey: false
    //}
);

const Cliente = model('Cliente', clienteSchema);

export class ClienteModel {
    static async getAll() {
        try {
            return Cliente.find();
        } catch (e) {
            console.log(e);
        }
    }

    static async getOneByID(id) {
        try {
            return await Cliente.findById(id);
        } catch (e) {
            console.log(id)
            console.log(e);
        }
    }

    static async delete(id) {
        try {
            return Cliente.deleteOne({ _id: id  });
        } catch (e) {
            console.log(e);
        }
    }

    static async create(cliente) {
        if (!cliente.success) {
            return Error;
        }

        const nuevoCliente = {
            ...cliente.data
        };

        const clienteGuardar = new Cliente(nuevoCliente);
        try {
            await clienteGuardar.save();
            return nuevoCliente;
        } catch (e) {
            console.log(e);
        }
    }

    static async update(id, cliente) {
        if (!cliente.success) {
            return Error;
        }

        const nuevoCliente = {
            ...cliente.data
        };

        try {
            await Cliente.updateOne({ _id: id }, nuevoCliente);
            return nuevoCliente;
    
        } catch (e) {
            console.log(id);
        }
    }
}