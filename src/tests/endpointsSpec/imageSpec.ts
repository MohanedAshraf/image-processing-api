import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Testing the image endpoint', () => {
  it('Using the endpoint without providing the filname parameter it should returns 404', async () => {
    await request.get('/api/image').expect(404);
  });

  it('Using the endpoint with a non-existent image returns 404', async () => {
    await request.get('/api/image?filename=anything').expect(404);
  });

  it('Using the endpoint with a valid image', async () => {
    await request.get('/api/image?filename=fjord').expect(200);
  });

  it('Using the endpoint with a only width should returns 400', async () => {
    await request.get('/api/image?filename=fjord&width=200').expect(400);
  });
  it('Using the endpoint with a only height should returns 400', async () => {
    await request.get('/api/image?filename=fjord&height=200').expect(400);
  });

  it('Using the endpoint with a negative width should returns 400', async () => {
    await request
      .get('/api/image?filename=fjord&width=-1&height=200')
      .expect(400);
  });

  it('Using the endpoint with a negative height should returns 400', async () => {
    await request
      .get('/api/image?filename=fjord&width=200&height=-1')
      .expect(400);
  });

  it('Using the endpoint with not a number width should returns 400', async () => {
    await request
      .get('/api/image?filename=fjord&width=mohaned&height=200')
      .expect(400);
  });

  it('Using the endpoint with not a number height should returns 400', async () => {
    await request
      .get('/api/image?filename=fjord&width=200&height=mohaned')
      .expect(400);
  });

  it('Using the endpoint with valid filname , width and height should returns 200', async () => {
    await request
      .get('/api/image?filename=fjord&width=200&height=200')
      .expect(200);
  });
});
