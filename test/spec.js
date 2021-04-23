const { expect } = require('chai');
const app = require('supertest')(require('../app'));
const { syncAndSeed } = require('../db');

describe('initial test', () => {
  it('passing blank test', () => {
    expect(1).to.equal(1);
  });
});
describe('get route works', () => {
  beforeEach(() => syncAndSeed());
  it('gets a message', async () => {
    const response = await app.get('/');
    expect(response.status).to.equal(200);
    expect(response.text).to.include('hello world!');
  });
  describe('check /api/movies', () => {
    it('/api/movies works', async () => {
      const response = await app.get('/api/movies');
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(4);
    });
  });
  // describe('check /api/actors', () => {
  //   it('/api/actors works', async()=> {
  //     const response = await app.get('/api/actors')
  //     expect(response.include)
  //   })
  // })
});
