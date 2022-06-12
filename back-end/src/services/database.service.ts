import * as mongoDB from "mongodb";
import reservas from "../models/reservas";

export const collections: { reservas ?: mongoDB.Collection<reservas> } = {};

export const connectToDatabase=async ()=> {
   
    // Create a new MongoDB client with the connection string from .env
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

    // Connect to the cluster
    await client.connect();

    // Connect to the database with the name specified in .env
    const db = client.db(process.env.DB_NAME);

    const reservasCollection = db.collection<reservas>(process.env.COLLECTION_NAME_RESERVA);
    collections.reservas = reservasCollection;

    console.log(
        `Successfully connected to database: ${db.databaseName} and collection: ${reservasCollection.collectionName}`,
    );
}
