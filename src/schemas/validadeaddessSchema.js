import joi from "joi";

export const validadeAddesschema = joi.object({


    cep: joi.string().required() .pattern(new RegExp('^[0-9]{5}-[0-9]{3}$')),
    estado: joi.string().required(),
    cidade: joi.string().required(),
    rua: joi.string().required(),
    bairro: joi.string().required(),
    numero: joi.number().required(),
    complemento: joi.string(),
})