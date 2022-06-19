import express, { Request, Response } from 'express';
import { ObjectId } from "mongodb";
import { collections3 } from "../services/database.service";
import { createValidator } from 'express-joi-validation';
import restaurantesShema from '../schemas-joi/restaurantes';

export const restauranteRouter = express.Router();

const validator = createValidator({});

restauranteRouter.use(express.json());

//visualiza todas los restaurantes 
restauranteRouter.get("/restaurante",validator.query(restaurantesShema),async (_req: Request, res: Response) => {
    try {
       
        const restaurantes = await collections3.restaurantes.find({}).toArray();

        res.status(200).send(restaurantes);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// visualiza un restaurante por id
restauranteRouter.get("/restaurante/:id",async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const query = { _id: new ObjectId(id) };
        const restaurantes = await collections3.restaurantes.findOne(query);

        if (restaurantes) {
            res.status(200).send(restaurantes);
        }
    } catch (error) {
        res.status(404).send(`No se puede encontrar el restaurante con ID: ${req.params.id}`);
    }
});

//crear nuevos restaurantes
restauranteRouter.post("/restaurante",validator.body(restaurantesShema),async (req: Request, res: Response) => {
    try {
        const newRestaurantes = req.body;
        const result = await collections3.restaurantes.insertOne(newRestaurantes);
        result
            ? res.status(200).send(`Se creo restaurante con id ${result.insertedId}`)
            : res.status(500).send(" Error en el servidor");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

//Actualizar y modificar restaurantes por id
restauranteRouter.put("/restaurante/:_id",validator.body(restaurantesShema), async (req: Request, res: Response) => {
    const id = req?.params?.id;
    try {
        const updateRestaurantes = req.body;
        const query = { _id: new ObjectId(id) };
        const result = await collections3.restaurantes.updateOne(query, { $set: updateRestaurantes });
        result
            ? res.status(200).send(`Restaurante actualizado exitosamente `)
            : res.status(304).send(`Restaurante con id: ${id} no fue actualizado`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

//Eliminar restaurentes por id
restauranteRouter.delete("/restaurante/:id",async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections3.restaurantes.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Se elimina el restaurante con id ${id} correctamente`);
        } else if (!result) {
            res.status(400).send(`Fallo al eliminar el restaurante con ID: ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Restaurente con ID ${id} no existe`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

