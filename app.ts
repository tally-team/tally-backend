import { NextFunction, Request, Response } from 'express';

import express from 'express';
import routes from './routes/api';
import cors from 'cors';

const app = express();

// currently only setting allowed origin for local dev
// need to enable cors since the FE makes an API call to the server from a different port
app.use(cors({
  origin: /^http:\/\/localhost:[0-9]+/
}));

//body parsing middleware
app.use(express.json());

//express routes
app.use('/api', routes);

//error handeling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

export default app;
