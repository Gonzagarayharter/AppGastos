import mongoose from "mongoose";

export const conectarDB = async() : Promise <void> => {

    try {
        await mongoose.connect("mongodb+srv://gonzalogarayharter:nucba3317@3317.abpknyy.mongodb.net/")
        console.log("Base de datos online");        
    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de inicializar la base de datos");        
    }
}