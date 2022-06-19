import Joi from 'joi';

const planesTuristicosShema = Joi.object({
    destino: Joi.string().required(),
    descripcion: Joi.string().required(),
    incluye: Joi.string().required(),
    valor: Joi.number().required()
})

export default planesTuristicosShema;