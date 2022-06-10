"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: path_1.default.join(__dirname, '../src/public/uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
//limite y cantidad del archivo 
exports.uploadFile = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 1000000
    }
}).single('foto');
// uploadFile(req, res, err => {
// if (err) {
//   console.log(err)
//   err.message = 'Error al cargar el archivo'
//   res.send(err)
// }
// if (req.file) console.log(req.file)
// else if (req.files) console.log(req.files)
// res.send('Archivo cargado')    
//# sourceMappingURL=configMulter.js.map