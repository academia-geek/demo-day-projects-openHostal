import Joi from "joi";

const restaurantesShema = Joi.object({
    nombre: Joi.string().required(),
    direccion: Joi.string().required(),
    barrio: Joi.string().required(),
    telefono: Joi.string().required(),
    descripcion: Joi.string().required(),
    tipoDeComida: Joi.string().required(),
    rangoDePrecios: Joi.string().required()
})

export default restaurantesShema;