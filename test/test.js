const { connectDB, disconnectDB } = require("../utils/test-utils/db.util");

const supertest = require('supertest')
const app = require('../app');
const request = supertest(app);

beforeAll(() => {
  connectDB();
});

afterAll(() => {
  disconnectDB();
});

it('Testing to see if Jest works', function() {
  expect(1).toBe(1);
});