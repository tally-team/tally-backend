import express from 'express';
const router = express.Router();

import { users } from './users';

router.use(users);

router.use((req, res, next) => {
  const err = new Error('API route not found :(');
  next(err);
});

export default router;
