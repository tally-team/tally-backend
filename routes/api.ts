import { NextFunction, Request, Response } from 'express';

import express from 'express';
const router = express.Router();
import User from '../db/schema/user';

type FIX_ME = unknown;

//currently hosing user route, will split off individual schema routes in the future
router.get('/users', (req: Request, res: Response) => {
  User.find({}).then(function (users: FIX_ME) {
    res.send(users);
  });
});

router.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUser = {
    uuid: req.body.uuid,
    userName: req.body.userName,
    password: req.body.password,
    preferredPaymentMethod: req.body.preferredPaymentMethod,
  };
  User.create(newUser)
    .then(function (user: FIX_ME) {
      res.send(user);
    })
    .catch((e: unknown) => {
      next(e);
    });
});

export default router;
