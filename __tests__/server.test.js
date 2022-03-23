'use strict';

const supertest = require('supertest');
const { app } = require('../src/server.js');
const request = supertest(app);

describe('Testing server handlers', () => {

  it('API should return 404 on a bad method', async () => {
    const response = await request.post('/');

    expect(response.status).toEqual(404);
  });

  it('API should return 404 on a bad route', async () => {
    const response = await request.get('/');

    expect(response.status).toEqual(404);
  });
});
