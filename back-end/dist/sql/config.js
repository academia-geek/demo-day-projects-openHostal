"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log(process.env.PASS_DB);
exports.pool = new pg_1.Pool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DATABASE,
    max: 20,
    // Número de milisegundos que un cliente debe permanecer inactivo en el pool y no ser comprobado
    // antes de ser desconectado del backend y descartado
    // por defecto es 10000 (10 segundos) - se ajusta a 0 para desactivar la desconexión automática de los clientes inactivos
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});
module.exports = { pool: exports.pool };
//# sourceMappingURL=config.js.map