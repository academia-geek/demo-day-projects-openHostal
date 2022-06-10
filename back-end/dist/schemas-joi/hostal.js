"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomSchema = exports.usersSchema = void 0;
const joi_1 = __importDefault(require("joi"));
//  const  hostalSchema=Joi.object({
//     nombre:Joi.string().min(1).max(25).required(),
//     cuidad:Joi.string().min(1).max(45).required(),
//     sede:Joi.string().min(1).max(45),
//     descripcion:Joi.string().min(1).max(200).required(),
//     direccion:Joi.string().required(),
//     foto: Joi.any().required(),
//     coordenadas:Joi.string().min(1).max(100).required(),
// });
exports.usersSchema = joi_1.default.object({
    nombre: joi_1.default.string().min(1).max(15).required(),
    apellido: joi_1.default.string().min(1).max(50).required(),
    email: joi_1.default.string().email().required(),
    contrasena: joi_1.default.string().min(1).max(30).required(),
    celular: joi_1.default.number().required(),
    tipo_documento: joi_1.default.string().required(),
    numero_documento: joi_1.default.number().required(),
    nacionalidad: joi_1.default.string().min(1).max(15).required(),
    rol: joi_1.default.string().required(),
    id_hotales: joi_1.default.number().required()
});
exports.roomSchema = joi_1.default.object({
    tipo: joi_1.default.string().min(1).max(30),
    descripcion: joi_1.default.string().min(1).max(100).required(),
    foto: joi_1.default.string().required(),
    estado: joi_1.default.number().required(),
    capacidad: joi_1.default.number().required(),
    servicios: joi_1.default.string().min(1).max(30),
    id_hotales: joi_1.default.number().required()
});
//# sourceMappingURL=hostal.js.map