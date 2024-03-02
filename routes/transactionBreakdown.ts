import { Request, Response } from 'express';
import { getTransactionBreakdown } from './utils/TransactionBreakdownService';
import { requestInputSchemaValidator } from '../middleware/RequestInputSchemaValidator';
import { transactionBreakdownSchema } from '../middleware/RequestItemSchemas/transactionBreakdownSchema';
import express from 'express';
const router = express.Router();

router.post(
  '/transactionBreakdown',
  requestInputSchemaValidator(transactionBreakdownSchema.data),
  (req: Request, res: Response) => {
    const { items, tax, tip, party } = req.body;

    const transactionBreakdown = getTransactionBreakdown(items, tax, tip, party);
    return res.send(transactionBreakdown);
  }
);

export const transactionBreakdown = router;
