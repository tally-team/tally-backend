import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';

export const transactionBreakdownDataValidation = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  };
};
/* @todo implement previously defined schema when we start sending real data */
export const transactionBreakdownSchema = {
  data: Joi.object({
    items: Joi.array()
      .items(
        Joi.object({
          name: Joi.string().required(),
          cost: Joi.number().min(0).required(),
          people: Joi.array().items(Joi.string()).required(),
        })
      )
      .required(),
    tax: Joi.number().min(0).required(),
    tip: Joi.number().min(0).required(),
    party: Joi.array().items(Joi.string()).required(),
  }),
};
