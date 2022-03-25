import path from 'path';

import { imageProcessing } from '../middlewares/imageProcessing';

describe('test image processing function', (): void => {
  it('using fjord filename and 500 width and height', async (): Promise<void> => {
    const imagePath: string = path.join(
      __dirname,
      '../../../assets/images',
      `${'fjord'}.jpg`
    );
    const thumbImagePath: string = path.join(
      __dirname,
      '../../../assets/thumbnails',
      `${'fjord'}_${500}_${500}.jpg`
    );
    expect(async (): Promise<void> => {
      await imageProcessing(imagePath, thumbImagePath, 500, 500);
    }).not.toThrow();
  });
});
