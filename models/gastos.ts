import { Model, Schema, model } from "mongoose";

export interface IGasto {
    dni: number;
    nombre: string;
    categoriaGasto: string;
    detalleGasto: string;
    importe: number;
}

const GastoSchema = new Schema<IGasto>({
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    categoriaGasto: {
        type: String,
        required: true
    },
    detalleGasto: {
        type: String,
        required: true
    },
    importe: {
        type: Number,
        required: true
    }
});

const Gasto: Model<IGasto> = model<IGasto>("Gasto", GastoSchema);

export default Gasto;