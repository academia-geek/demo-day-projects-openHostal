"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomSchema = exports.usersSchema = exports.hostalSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.hostalSchema = joi_1.default.object({
    nombre: joi_1.default.string().min(1).max(25).required(),
    ciudad: joi_1.default.string().min(1).max(45).required(),
    sede: joi_1.default.string().required(),
    descripcion: joi_1.default.string().min(1).max(200).required(),
    direccion: joi_1.default.string().required(),
    geometry1: joi_1.default.number().required(),
    geometry2: joi_1.default.number().required()
});
exports.usersSchema = joi_1.default.object({
    nombre: joi_1.default.string().min(1).max(15).required(),
    apellido: joi_1.default.string().min(1).max(50).required(),
    email: joi_1.default.string().email().required(),
    contrasena: joi_1.default.string().min(1).max(30).required(),
    celular: joi_1.default.number().required(),
    tipo_documento: joi_1.default.string().required(),
    numero_documento: joi_1.default.number().required(),
    nacionalidad: joi_1.default.string().min(1).max(15).required(),
    rol: joi_1.default.boolean().required(),
    id_hotales: joi_1.default.number().required()
});
exports.roomSchema = joi_1.default.object({
    tipo: joi_1.default.string().min(1).max(30),
    descripcion: joi_1.default.string().min(1).max(100).required(),
    foto: joi_1.default.string().required(),
    estado: joi_1.default.number().required(),
    capacidad: joi_1.default.number().required(),
    servicios: joi_1.default.string().min(1).max(30),
    precio: joi_1.default.boolean().required(),
    imagenes: joi_1.default.string(),
    id_hotales: joi_1.default.number().required()
});
//# sourceMappingURL=hostal.js.map