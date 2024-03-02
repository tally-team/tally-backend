import Joi from 'joi';

/* @todo implement previously defined schema when we start sending real data */
export const transactionBreakdownSchema = {
  data: Joi.object({
    items: Joi.array()
      .min(1)
      .items(
        Joi.object({
          name: Joi.string().required(),
          cost: Joi.number().positive().required(),
          people: Joi.array().items(Joi.string()).required(),
        })
      )
      .required(),
    tax: Joi.number().min(0).required(),
    tip: Joi.number().min(0).required(),
    party: Joi.array().items(Joi.string()).required(),
  }),
};
