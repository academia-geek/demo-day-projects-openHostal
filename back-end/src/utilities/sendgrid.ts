const sgMail = require('@sendgrid/mail')
import * as dotenv from 'dotenv'
dotenv.config()
sgMail.setApiKey(process.env.API_KEY_SENDGRID)

export default async (userEmails: Array<string>,params: object,templateId: string) => {
  const msj = {
    to: userEmails, //Lista de correos a los que le voy a enviar el email
    from: process.env.API_KEY_EMAIL, // Email verificado
    templateId: templateId,//Template ID de la plantilla
    dynamic_template_data: params
  }

  console.log(msj)

  sgMail
    .send(msj)
    .then(() => {
        console.log('Email send')
    })
    .catch(error=> {

        console.error(error.response.body.errors)
    })
}
