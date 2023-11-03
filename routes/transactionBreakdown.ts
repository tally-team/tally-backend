import { Request, Response } from 'express';
import { getTransactionBreakdown } from './utils/TransactionBreakdownService';
import express from 'express';
const router = express.Router();

router.post('/transactionBreakdown', (req: Request, res: Response) => {
  const { items, tax, tip, party } = req.body;
  if (items == null || tax == null || tip == null || party == null) {
    return res.status(400).send('Missing content in payload');
  }
  const transactionBreakdown = getTransactionBreakdown(items, tax, tip, party);
  return res.send(transactionBreakdown);
});

export const transactionBreakdown = router;
