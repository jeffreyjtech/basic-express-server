'use strict';

const supertest = require('supertest');
const { app } = require('../src/server.js');
const request = supertest(app);

describe('Testing validator handler', () => {

  it('API should return 200 if request is good', async () => {
    let query = 'Jeffrey';
    let url = `/person?name=${query}`;
    const response = await request.get(url);

    expect(response.status).toEqual(200);
  });

  it('API should return a correct object if request is good', async () => {
    let query = 'Jeffrey';
    let url = `/person?name=${query}`;
    const response = await request.get(url);

    expect(response.body.name).toEqual(query);
  });

  it('API should return 500 if request query is missing name property', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
  });
});