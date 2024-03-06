import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserCredentialsSpec = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
};

export const UserTreeSpec = {
    title: Joi.string().required(),
    location: Joi.string().required(),
    height: Joi.number().allow("").optional(),
    girth: Joi.number().allow("").optional(),
    description: Joi.string().allow("").optional(),
    userid: Joi.string().required()
};