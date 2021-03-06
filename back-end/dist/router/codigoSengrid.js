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
exports.codigoRouter = void 0;
const express_1 = __importDefault(require("express"));
const templateid_const_1 = __importDefault(require("../constants/templateid.const"));
const templateid_const1_1 = __importDefault(require("../constants/templateid.const1"));
const templateid_const2_1 = __importDefault(require("../constants/templateid.const2"));
const templateid_const3_1 = __importDefault(require("../constants/templateid.const3"));
const generarcodigo_1 = __importDefault(require("../utilities/generarcodigo"));
const sendgrid_1 = __importDefault(require("../utilities/sendgrid"));
const express_joi_validation_1 = require("express-joi-validation");
const main_1 = __importDefault(require("../schemas-joi/main"));
exports.codigoRouter = express_1.default.Router();
const validator = (0, express_joi_validation_1.createValidator)();
exports.codigoRouter.use(express_1.default.json());
exports.codigoRouter.post('/registro', validator.body(main_1.default), (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = _req.body;
        const codigo = `https://openhostal.web.app/registro`;
        yield (0, sendgrid_1.default)(email, {
            subject: 'Validate email',
            name,
            codigo
        }, templateid_const_1.default.SEND_CODE);
        res.status(200).send('Mail send');
    }
    catch (error) {
        console.log(error);
        res.status(500).send("error");
    }
}));
exports.codigoRouter.post('/SEND_CHECKIN', validator.body(main_1.default), (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = _req.body;
        const codigo = (0, generarcodigo_1.default)();
        yield (0, sendgrid_1.default)(email, {
            subject: 'Validate email',
            name,
            codigo
        }, templateid_const1_1.default.SEND_CHECKIN);
        res.status(200).send('Mail send');
    }
    catch (error) {
        console.log(error);
        res.status(500).send("error");
    }
}));
exports.codigoRouter.post('/SEND_CheckOut', validator.body(main_1.default), (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = _req.body;
        const codigo = (0, generarcodigo_1.default)();
        yield (0, sendgrid_1.default)(email, {
            subject: 'Validate email',
            name,
            codigo
        }, templateid_const2_1.default.SEND_CheckOut);
        res.status(200).send('Mail send');
    }
    catch (error) {
        console.log(error);
        res.status(500).send("error");
    }
}));
exports.codigoRouter.post('/validar', validator.body(main_1.default), (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = _req.body;
        const codigo = `https://openhostal.web.app/registro`;
        yield (0, sendgrid_1.default)(email, {
            subject: 'Validate email',
            name,
            codigo
        }, templateid_const3_1.default.SEND_VALIDAR);
        res.status(200).send('Mail send');
    }
    catch (error) {
        console.log(error);
        res.status(500).send("error");
    }
}));
//# sourceMappingURL=codigoSengrid.js.map