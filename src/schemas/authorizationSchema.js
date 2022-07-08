import joi from "joi";


export const SchemaSingup = joi.object({

    name: joi.string().required(),
    cpf: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required().min(6),
    confirmPassword: joi.ref('password')
}) 

export const SchemaLogin = joi.object({

    email: joi.string().email().required(),
    password: joi.string().required(),
})