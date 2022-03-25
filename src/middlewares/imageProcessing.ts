import sharp from 'sharp';

export const imageProcessing = async (
  imagePath: string,
  thumbImagePath: string,
  width: number,
  height: number
): Promise<string> => {
  return await sharp(imagePath)
    .resize(Number(width), Number(height))
    .toFormat('jpg')
    .toFile(thumbImagePath)
    .then((): string => thumbImagePath)
    .catch((err) => err);
};
