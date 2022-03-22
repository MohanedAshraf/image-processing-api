import { Router, Request, Response } from 'express';
import imageRoute from './api/image';
const routes = Router();

routes.use('/image', imageRoute);

routes.get('*', (req: Request, res: Response) => {
  res.status(404);
  res.send(`<h1> Page Not Found </h1>`);
});

export default routes;
