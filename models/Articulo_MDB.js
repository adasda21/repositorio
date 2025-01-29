import mongoose,{model} from "mongoose";
import  {conexion} from "../helpers/conexion.js";
import { response } from "express";

conexion();
const articuloSchema = new mongoose.Schema(
    {
        id: String,
        titulo: String,
        cuerpo: String,
        Articulo: String,
    },
    {
        versionkey: false
    }

)

const Articulo = model('Articulo',articuloSchema);

export class ArticuloModel{
    static  async getAll()  {
        try{
            return Articulo.find();
        }
        catch(e){
            console.log(e);
        }
    }
    static async getOneByID(id){
        try {
            return await Articulo.findById(id);
        }
        catch(e){
            console.log(e);
        }
    }

    static async delete(id){
        try{
            return Articulo.deleteOne({_id: id })
        }
        catch{
            console.log(e);
        }
    }
    
    static async create(articulo){
        if(!articulo.success){
            return Error;
        }

        const nuevoArticulo={
            ...articulo.data
        };

        const articuloGuardar=new Articulo(nuevoArticulo);
        try {
            await articuloGuardar.save();
            return nuevoArticulo;
        }        
        catch(e)
        {
            console.log(e);
        }

    }

    static async update (id,validacion){
     if(!validacion.success){
        response.status(400).json('validacion de datos sale Incorrecto')
     }
     try{
        await Articulo.updateOne({ _id: id }, nuevoArticulo);
            return nuevoArticulo;
     }
     catch(e){
       console.log(e);
     }

    }

}
