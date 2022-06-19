import express, { Request, Response } from 'express';
import { ObjectId } from "mongodb";
import { collections4 } from "../services/database.service";
import { createValidator } from 'express-joi-validation';
import transportesShema from '../schemas-joi/transportes';

export const transporteRouter = express.Router();

const validator = createValidator({});

transporteRouter.use(express.json());

//visualiza todas los transportes 
transporteRouter.get("/transporte",validator.query(transportesShema),async (_req: Request, res: Response) => {
    try {
       
        const transportes = await collections4.transportes.find({}).toArray();

        res.status(200).send(transportes);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// visualiza un transporte por id
transporteRouter.get("/transporte/:id",async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const query = { _id: new ObjectId(id) };
        const transportes = await collections4.transportes.findOne(query);

        if (transportes) {
            res.status(200).send(transportes);
        }
    } catch (error) {
        res.status(404).send(`No se puede encontrar el transporte con ID: ${req.params.id}`);
    }
});

//crear nuevos transportes
transporteRouter.post("/transporte",validator.body(transportesShema),async (req: Request, res: Response) => {
    try {
        const newTransporte = req.body;
        const result = await collections4.transportes.insertOne(newTransporte);
        result
            ? res.status(200).send(`Se creo nuevo transporte con id ${result.insertedId}`)
            : res.status(500).send(" Error en el servidor");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

//Actualizar y modificar transportes por id
transporteRouter.put("/transporte/:_id",validator.body(transportesShema), async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const updateTransporte = req.body;
        const query = { _id: new ObjectId(id) };
        const result = await collections4.transportes.updateOne(query, { $set: updateTransporte });
        result
            ? res.status(200).send(`El transporte se actualizo exitosamente `)
            : res.status(304).send(`El transporte con id: ${id} no fue actualizado`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

//Eliminar transportes por id
transporteRouter.delete("/transporte/:id",async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections4.transportes.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Se elimino el transporte con id ${id} correctamente`);
        } else if (!result) {
            res.status(400).send(`Fallo al eliminar el transporte con ID: ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`El transporte con ID ${id} no existe`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

