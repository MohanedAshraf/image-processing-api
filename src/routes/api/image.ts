import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { validation } from '../../middlewares/validation';
const routes = Router();

// @desc      Review AND Resize Image
// @route     GET /api/image/review/?filename
// @route     GET /api/image/review/?filename&width&height
// @access    Public
routes.get('/', validation, async (req: Request, res: Response) => {
  const { filename, width, height } = req.query;
  const imagePath = path.join(
    __dirname,
    '../../assets/images',
    `${filename}.jpg`
  );
  if (fs.existsSync(imagePath)) res.status(404).send('Image not found');
  if (!width && !height) {
    res.sendFile(imagePath);
  }

  const thumbImagePath = path.join(
    __dirname,
    '../../assets/thumbnails',
    `${filename}_${width}_${height}.jpg`
  );

  if (fs.existsSync(thumbImagePath)) res.sendFile(thumbImagePath);
});

export default routes;
