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
exports.mailRouter = void 0;
const express_1 = __importDefault(require("express"));
const sendgrid_1 = __importDefault(require("../utilities/sendgrid"));
const templateid_const_1 = __importDefault(require("../constants/templateid.const"));
const generarcodigo_1 = __importDefault(require("../utilities/generarcodigo"));
exports.mailRouter = express_1.default.Router();
exports.mailRouter.use(express_1.default.json());
exports.mailRouter.post('/send_code', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = _req.body;
        const code = (0, generarcodigo_1.default)();
        yield (0, sendgrid_1.default)(email, {
            subject: 'Validate email',
            name,
            code
        }, templateid_const_1.default.SEND_CODE);
        res.status(200).send('Mail send');
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}));
//# sourceMappingURL=mail.router.js.map