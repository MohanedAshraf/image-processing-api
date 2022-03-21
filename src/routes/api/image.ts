import { Router, Request, Response } from 'express';
import { open } from 'fs/promises';
const routes = Router();

// @desc      Review AND Resize Image
// @route     GET /api/image/review/?filename
// @route     GET /api/image/review/?filename&width&height
// @access    Public
routes.get('/', (req: Request, res: Response) => {
  res.send('Welcome');
});

export default routes;
