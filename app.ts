import { NextFunction, Request, Response } from 'express';

import express from 'express';
import routes from './routes/api';

const app = express();

//body parsing middleware
app.use(express.json());

//express routes
app.use('/api', routes);

//error handeling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

export default app;
