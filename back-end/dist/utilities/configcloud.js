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
exports.uploadFileGoogle = exports.GOOGLE_CLOUD_BUCKET = void 0;
// const uploadFileGoogle= require('../storage');
const fs_1 = __importDefault(require("fs"));
const GOOGLE_CLOUD_PROJECT = 'trusty-coder-350212';
//nombre de bucket
exports.GOOGLE_CLOUD_BUCKET = 'semilleroshapi_350212';
//clear el cliente de cloud storage
const { Storage } = require('@google-cloud/storage');
const storage = new Storage({
    keyFilename: './src/utilities/key.json'
});
// //subi una imagen a mi bucket en GCP
const uploadFileGoogle = (originalname) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield storage.bucket(exports.GOOGLE_CLOUD_BUCKET).upload(`dist/src/public/uploads/${originalname}`, {
        destination: `${originalname} `
    });
    console.log(`${originalname} uploaded to ${exports.GOOGLE_CLOUD_BUCKET}`);
    try {
        fs_1.default.unlinkSync(`dist/src/public/uploads/${originalname}`);
        console.log('File removed');
    }
    catch (err) {
        console.error('Something wrong happened removing the file', err);
    }
});
exports.uploadFileGoogle = uploadFileGoogle;
//# sourceMappingURL=configcloud.js.map