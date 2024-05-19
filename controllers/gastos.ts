import { Request, Response } from "express";
import Gasto, { IGasto } from "../models/gastos";

export const getGastos = async ({}, res : Response) => {

    const gastos = await Gasto.find();

    res.json({ gastos })

    console.log("Gastos enviados");

}

export const getGastoByDNI = async (req : Request, res : Response) => {

    const { dni } = req.params;

    const gasto : IGasto | null = await Gasto.findOne({ dni : dni });

    res.json({ gasto });

}

export const createGasto = async (req : Request, res : Response) => {

    const GastoData: IGasto = req.body;

    const gasto = new Gasto(GastoData);

    await gasto.save();

    res.json({
        msg: "Perfecto! Se ha guardado su nuevo gasto",
        gasto
    });

    console.log("Gasto creado con éxito");

}

export const updateGasto = async (req : Request, res : Response) => {

    const { dni } = req.params;

    const {...data } = req.body;

    const gasto = await Gasto.findOneAndUpdate({ dni : dni }, data);

    res.json({
        msg: "El gasto se ha actualizado en la DB",
        gasto
    })

    console.log("Gasto actualizado con éxito");

}

export const deleteGasto = async (req : Request, res : Response) => {

    const { dni } = req.params;

    const gasto = await Gasto.findOneAndDelete({ dni : dni });

    if( !gasto ) {
        res.json({
            msg: "El gasto no fue encontrado en la DB"
        })
        return;
    }

    res.json({
        msg: "El gasto se ha borrado de la DB",
        gasto
    })

    console.log("Gasto borrado con éxito");

}