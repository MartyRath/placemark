import Joi from "joi";
                                                                                     
export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

// Extras from Mongo... _v and _id
export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const UserTreeSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Douglas fir"),
    location: Joi.string().required().example("Powerscourt, Waterford"),
    height: Joi.number().allow("").optional().example(30),
    girth: Joi.number().allow("").optional().example(12),
    description: Joi.string().allow("").optional().example("Best tree around"),
    userid: Joi.string().required().example("4c58dsxfs85"),
  })
  .label("UserTree");

export const UserTreeSpecPlus = UserTreeSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserTreePlus");

export const UserTreeArraySpec = Joi.array().items(UserTreeSpecPlus).label("UserTreeArray");