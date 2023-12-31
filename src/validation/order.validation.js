const Joi = require("joi");

const createOrder = {
    body: Joi.object().keys({
        user_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        role: Joi.string().required().trim(),
        profile_info: Joi.string().required().trim(),
        preferences: Joi.string().required().trim(),
    })
}

module.exports = {
    createOrder
}
