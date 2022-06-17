import Joi from 'joi';

const reservaShema = Joi.object({
    sede: Joi.string().required(),
    ciudad: Joi.string().required(),
    checkIn: Joi.string(),
    checkOut: Joi.string(),
    huespedes: Joi.number().required(),
    noches:Joi.number().required(),
    habitacion: Joi.number().required(),
    valorTotal: Joi.number().required(),

})

export default reservaShema;
