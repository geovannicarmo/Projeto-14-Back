import joi from "joi";

export const paymentsSchema = joi.object({


    name: joi.string().required(),
    ncard: joi.string().required().min(16).max(16),
    validate: joi.string().required().min(4).max(4),
    securityCode: joi.string().required().min(3).max(3),

})