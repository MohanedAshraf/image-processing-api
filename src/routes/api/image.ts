import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { validation } from '../../middlewares/validation';
import { imageProcessing } from '../../middlewares/imageProcessing';

const routes = Router();

// @desc      Review AND Resize Image
// @route     GET /api/image/?filename
// @route     GET /api/image/?filename&width&height
// @access    Public
routes.get(
  '/',
  validation,
  async (
    req: Request,
    res: Response
  ): Promise<void | Response<unknown, Record<string, unknown>>> => {
    const { filename, width, height } = req.query;
    const imagePath: string = path.join(
      __dirname,
      '../../../assets/images',
      `${filename}.jpg`
    );

    if (!fs.existsSync(imagePath))
      return res.status(404).send('Image not found');
    if (!width && !height) return res.sendFile(imagePath);

    const thumbImagePath: string = path.join(
      __dirname,
      '../../../assets/thumbnails',
      `${filename}_${width}_${height}.jpg`
    );

    if (fs.existsSync(thumbImagePath)) return res.sendFile(thumbImagePath);

    try {
      const filePath: string = await imageProcessing(
        imagePath,
        thumbImagePath,
        Number(width),
        Number(height)
      );

      return res.sendFile(filePath);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
);

export default routes;
