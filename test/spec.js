const { expect } = require('chai');
const app = require('supertest')(require('../app'));

describe('initial test', () => {
  it('passing blank test', () => {
    expect(1).to.equal(1);
  });
});
describe('get route works', () => {
  it('gets a message', async () => {
    const response = await app.get('/');
    expect(response.status).to.equal(200);
    expect(response.text).to.include('hello world!');
  });
});
