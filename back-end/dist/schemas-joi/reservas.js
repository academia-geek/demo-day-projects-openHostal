"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const reservaShema = joi_1.default.object({
    sede: joi_1.default.string().required(),
    ciudad: joi_1.default.string().required(),
    checkIn: joi_1.default.string(),
    checkOut: joi_1.default.string(),
    huespedes: joi_1.default.number().required(),
    noches: joi_1.default.number().required(),
    habitacion: joi_1.default.number().required(),
    valorTotal: joi_1.default.number().required(),
});
exports.default = reservaShema;
//# sourceMappingURL=reservas.js.map