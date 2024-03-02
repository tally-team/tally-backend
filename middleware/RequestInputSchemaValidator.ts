import { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';

export const requestInputSchemaValidator = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error: any) {
      return res.status(400).json({ message: error.details });
    }
  };
};
