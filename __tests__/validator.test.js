'use strict';

const supertest = require('supertest');
const { app } = require('../src/server.js');
const request = supertest(app);

describe('Testing validator handler', () => {

  it('API should return 200 with a correct object if request is good', async () => {
    let url = '/person?name=Jeffrey';
    const response = await request.get(url);

    expect(response.status).toEqual(200);
    
  });

  it('API should return 500 if request query is missing name property', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
  });
});