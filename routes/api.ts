import express from 'express';
const router = express.Router();

import { users } from './users';
import { transactionBreakdown } from './transactionBreakdown';

router.use(users);
router.use(transactionBreakdown);

router.use((req, res, next) => {
  const err = new Error('API route not found :(');
  next(err);
});

export default router;
