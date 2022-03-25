import { Request, Response, NextFunction } from 'express';

export const validation = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const { filename, width, height } = req.query;

  if (!filename) return res.status(404).send('Must include filename');
  if (!width && !height) return next();
  if (!width || !height)
    return res.status(400).send('Must include width and height together');
  if (isNaN(+width) || +width <= 0 || isNaN(+height) || +height <= 0)
    return res
      .status(400)
      .send(
        'Something wrong with width and height params Must be a Numnber and Bigger than 1'
      );
  next();
};
