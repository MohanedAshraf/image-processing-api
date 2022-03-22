import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';
import { validation } from '../../middlewares/validation';
const routes = Router();

// @desc      Review AND Resize Image
// @route     GET /api/image/?filename
// @route     GET /api/image/?filename&width&height
// @access    Public
routes.get('/', validation, async (req: Request, res: Response) => {
  const { filename, width, height } = req.query;
  const imagePath = path.join(
    __dirname,
    '../../../assets/images',
    `${filename}.jpg`
  );

  if (!fs.existsSync(imagePath)) return res.status(404).send('Image not found');
  if (!width && !height) return res.sendFile(imagePath);

  const thumbImagePath = path.join(
    __dirname,
    '../../../assets/thumbnails',
    `${filename}_${width}_${height}.jpg`
  );

  if (fs.existsSync(thumbImagePath)) return res.sendFile(thumbImagePath);

  return await sharp(imagePath)
    .resize(Number(width), Number(height))
    .toFormat('jpg')
    .toFile(thumbImagePath)
    .then(() => res.sendFile(thumbImagePath))
    .catch((err) => res.status(500).send(err));
});

export default routes;
