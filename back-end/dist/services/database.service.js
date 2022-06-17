"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.collections4 = exports.collections3 = exports.collections2 = exports.collections = void 0;
const mongoDB = __importStar(require("mongodb"));
exports.collections = {};
exports.collections2 = {};
exports.collections3 = {};
exports.collections4 = {};
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    // Create a new MongoDB client with the connection string from .env
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    // Connect to the cluster
    yield client.connect();
    // Connect to the database with the name specified in .env
    const db = client.db(process.env.DB_NAME);
    const reservasCollection = db.collection(process.env.COLLECTION_NAME_RESERVA);
    exports.collections.reservas = reservasCollection;
    const planesTuristicosCollection = db.collection(process.env.COLLECTION_NAME_PLANES);
    exports.collections2.planesTuristicos = planesTuristicosCollection;
    const restaurantesCollection = db.collection(process.env.COLLECTION_NAME_RESTAURANTE);
    exports.collections3.restaurantes = restaurantesCollection;
    const transportesCollection = db.collection(process.env.COLLECTION_NAME_TRANSPORTE);
    exports.collections4.transportes = transportesCollection;
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${reservasCollection.collectionName}`);
});
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=database.service.js.map