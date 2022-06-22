import Joi from "joi";

const transportesShema = Joi.object({
    nombre: Joi.string().required(),
    tipo: Joi.string().required(),
    contacto: Joi.string().required()
})

export default transportesShema;