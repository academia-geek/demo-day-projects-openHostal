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
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = require("../sql/config");
exports.usersRouter = express_1.default.Router();
const express_joi_validation_1 = require("express-joi-validation");
const hostal_1 = require("../schemas-joi/hostal");
const token_1 = require("../firebase/token");
const validator = (0, express_joi_validation_1.createValidator)({});
exports.usersRouter.use(express_1.default.json());
exports.usersRouter.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield config_1.pool.connect();
    try {
        let result = yield cliente.query('SELECT * FROM users');
        res.json(result.rows);
    }
    catch (err) {
        console.log({ err });
        res.status(500).json({ error: 'Internal error server' });
    }
}));
exports.usersRouter.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield config_1.pool.connect();
    const { id } = req.params;
    try {
        let result = yield cliente.query(`SELECT * FROM users WHERE id = $1`, [id]);
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
//,validator.body(usersSchema)
exports.usersRouter.post('/users', token_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, apellido, email, contrasena, celular, tipo_documento, numero_documento, nacionalidad, rol, id_hostal } = req.body;
        const cliente = yield config_1.pool.connect();
        const response = yield cliente.query(`INSERT INTO users(nombre,apellido,email,contrasena,celular,tipo_documento,numero_documento,nacionalidad,rol,id_hostal)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)RETURNING id`, [nombre,
            apellido,
            email,
            contrasena,
            celular,
            tipo_documento,
            numero_documento,
            nacionalidad,
            rol,
            id_hostal]);
        if (response.rowCount > 0) {
            res.send('Se crea usuario correctamente');
        }
        else {
            res.json({ message: 'No se pudo crear el usuario' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal error server' });
    }
}));
exports.usersRouter.put('/users/:id', token_1.decodeToken, validator.body(hostal_1.usersSchema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield config_1.pool.connect();
    const { id } = req.params;
    const { nombre, apellido, email, contrasena, celular, tipo_documento, numero_documento, nacionalidad, rol, id_hostal } = req.body;
    try {
        const result = yield cliente.query(`UPDATE users SET nombre = $1, apellido=$2,email = $3,contrasena =$4,celular =$5, tipo_documento=$6,numero_documento=$7,nacionalidad=$8,rol=$9, id_hostal=$10 WHERE id =$11`, [nombre,
            apellido,
            email,
            contrasena,
            celular,
            tipo_documento,
            numero_documento,
            nacionalidad,
            rol,
            id_hostal,
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
exports.usersRouter.delete('/users/:id', token_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cliente = yield config_1.pool.connect();
    const { id } = req.params;
    try {
        const result = yield cliente.query(`DELETE FROM users WHERE id = $1`, [id]);
        if (result.rowCount > 0) {
            res.send('Se eliminado usuario de manera exitosa');
        }
        else {
            res.status(409).json({ message: 'Error en dato enviado' });
        }
    }
    catch (err) {
        res.status(500).json({ error: 'Error server' });
    }
}));
//# sourceMappingURL=users.js.map