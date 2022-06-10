"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hostalRouter = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = require("../sql/config");
const configMulter_1 = require("../utilities/configMulter");
exports.hostalRouter = express_1.default.Router();
const configcloud_1 = require("../utilities/configcloud");
const configcloud_2 = require("../utilities/configcloud");
///////////////////Rutas:
exports.hostalRouter.use(express_1.default.json());
/////consultas por metodo GET
exports.hostalRouter.get('/hostal', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield config_1.pool.connect();
    try {
        let result = yield cliente.query('SELECT * FROM hostal');
        res.json(result.rows);
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ error: 'Internal error server' });
    }
}));
exports.hostalRouter.get('/hostal/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield config_1.pool.connect();
    const { id } = req.params;
    try {
        let result = yield cliente.query(`SELECT * FROM hostal WHERE id = $1`, [id]);
        if (result.rows.length > 0) {
            res.json(result.rows);
        }
        else {
            res.send('NO EXISTE HOSTAL');
        }
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ error: 'Internal error server' });
    }
}));
exports.hostalRouter.post('/hostal', configMulter_1.uploadFile, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const originalname = req.file.originalname;
    const foto = `${configcloud_1.GOOGLE_CLOUD_BUCKET}/${originalname}`;
    const { nombre, ciudad, sede, descripcion, direccion, coordenadas } = req.body;
    try {
        const cliente = yield config_1.pool.connect();
        const response = yield cliente.query(`INSERT INTO hostal(nombre,ciudad,sede,descripcion,direccion,foto,coordenadas)VALUES ($1,$2,$3,$4,$5,$6,$7)RETURNING id`, [nombre,
            ciudad,
            sede,
            descripcion,
            direccion,
            foto,
            coordenadas]);
        if (response.rowCount > 0) {
            res.send('Se crea hotal correctamente');
            (0, configcloud_2.uploadFileGoogle)(originalname).catch(console.error);
        }
        else {
            res.json({ message: 'No se pudo crear el hotal' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal error server' });
    }
}));
exports.hostalRouter.put('/hostal/:id', configMulter_1.uploadFile, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const originalname = req.file.originalname;
    const foto = `${configcloud_1.GOOGLE_CLOUD_BUCKET}/${originalname}`;
    let cliente = yield config_1.pool.connect();
    const { id } = req.params;
    const { nombre, ciudad, sede, descripcion, direccion, coordenadas } = req.body;
    try {
        const result = yield cliente.query(`UPDATE hostal SET nombre = $1, ciudad=$2,sede = $3,descripcion =$4,direccion=$5,foto=$6,coordenadas=$7 WHERE id =$8`, [nombre,
            ciudad,
            sede,
            descripcion,
            direccion,
            foto,
            coordenadas,
            id]);
        if (result.rowCount > 0) {
            res.json({ message: 'Actualización realizada correctamente' });
        }
        else {
            res.status(503)
                .json({ message: 'Ocurrio un envento inesperado, intente de nuevo' });
        }
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ error: 'Internal error server' });
    }
}));
exports.hostalRouter.delete('/hostal/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield config_1.pool.connect();
    const { id } = req.params;
    try {
        const result = yield cliente.query(`DELETE FROM hostal WHERE id = $1`, [id]);
        if (result.rowCount > 0) {
            res.send('Se eliminado hostal de manera exitosa');
        }
        else {
            res.status(409).json({ message: 'Error en dato enviado' });
        }
    }
    catch (err) {
        res.status(500).json({ error: 'Error server' });
    }
}));
//# sourceMappingURL=hotal.js.map