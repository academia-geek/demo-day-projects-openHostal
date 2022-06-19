import express, { Request, Response } from 'express';
import { ObjectId } from "mongodb";
import { collections2 } from "../services/database.service";
import { createValidator } from 'express-joi-validation';
import planesTuristicosShema from '../schemas-joi/planesTuristicos';

export const planesRouter = express.Router();

const validator = createValidator({});

planesRouter.use(express.json());

//visualiza todas los planes Turisticos
planesRouter.get("/planes",validator.query(planesTuristicosShema),async (_req: Request, res: Response) => {
    try {
       
        const planesTuristicos = await collections2.planesTuristicos.find({}).toArray();

        res.status(200).send(planesTuristicos);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// visualiza un planTuristico por id
planesRouter.get("/planes/:id",async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const query = { _id: new ObjectId(id) };
        const planesTuristicos = await collections2.planesTuristicos.findOne(query);

        if (planesTuristicos) {
            res.status(200).send(planesTuristicos);
        }
    } catch (error) {
        res.status(404).send(`No se puede encontrar el plan Turistico: ${req.params.id}`);
    }
});

//crear nuevos planesTuristicos requiere squema Joi
planesRouter.post("/planes", validator.body(planesTuristicosShema), async (req: Request, res: Response) => {
    try {
        const newPlanTuristico = req.body;
        const result = await collections2.planesTuristicos.insertOne(newPlanTuristico);
        result
            ? res.status(200).send(`Se crea plan turistico con id ${result.insertedId}`)
            : res.status(500).send(" Error en el servidor");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

// Modificar y Actualizar planesTuristicos por id requiere schema joi
planesRouter.put("/planes/:_id", validator.body(planesTuristicosShema), async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const updatedPLanesTuristicos = req.body;
        const query = { _id: new ObjectId(id) };
        const result = await collections2.planesTuristicos.updateOne(query, { $set: updatedPLanesTuristicos });
        result
            ? res.status(200).send(`Plan Turistico actualizado exitosamente `)
            : res.status(304).send(`Plan Turistico con id: ${id} no fue actualizado`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

//Eliminar plan Turistico por id
planesRouter.delete("/planes/:id",async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections2.planesTuristicos.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Se elimino id ${id} correctamente`);
        } else if (!result) {
            res.status(400).send(`Fallo al eliminar ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Plan Turistico con ID ${id} no existe`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

