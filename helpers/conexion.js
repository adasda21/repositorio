import mongoose  from "mongoose";
export const conexion=async () =>{
   try{
     await mongoose.connect("mongodb://localhost:27017/myapp");
     console.log ("conectado correctamente");

   }
    catch (e){
        console.log(e)
    }

}
