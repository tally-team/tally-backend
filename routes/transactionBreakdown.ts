import { Request, Response } from 'express';
import { getTransactionBreakdown } from './utils/TransactionBreakdownService';
import {
  transactionBreakdownSchema,
  transactionBreakdownDataValidation,
} from '../middleware/transactionBreakdownDataValidation';
import express from 'express';
const router = express.Router();

router.post(
  '/transactionBreakdown',
  transactionBreakdownDataValidation(transactionBreakdownSchema.data),
  (req: Request, res: Response) => {
    const { items, tax, tip, party } = req.body;

    const transactionBreakdown = getTransactionBreakdown(items, tax, tip, party);
    return res.send(transactionBreakdown);
  }
);

export const transactionBreakdown = router;
