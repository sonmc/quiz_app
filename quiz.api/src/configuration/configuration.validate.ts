import * as Joi from 'joi';

export const configurationValidate = Joi.object({
  DATABASE_TYPE: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.string().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.optional(),
  DATABASE_NAME: Joi.string().required(),
  PORT: Joi.string().required(),
  EMAIL_HOST: Joi.string().required(),
  EMAIL_PORT: Joi.string().required(),
  EMAIL_USER: Joi.string().required(),
  EMAIL_PASSWORD: Joi.string().required(),
  MAIL_FROM: Joi.string().required(),
  API_HOST: Joi.string().required(),
});
