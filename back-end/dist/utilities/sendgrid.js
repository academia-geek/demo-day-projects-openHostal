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
Object.defineProperty(exports, "__esModule", { value: true });
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.API_KEY_SENDGRID);
exports.default = (userEmails, params, templateId) => __awaiter(void 0, void 0, void 0, function* () {
    const msj = {
        to: userEmails,
        from: 'dq083093@gmail.com',
        templateId: templateId,
        dynamic_template_data: params
    };
    console.log(msj);
    sgMail
        .send(msj)
        .then(() => {
        console.log('Email send');
    })
        .catch(error => {
        console.error(error.response.body.errors);
    });
});
//# sourceMappingURL=sendgrid.js.map