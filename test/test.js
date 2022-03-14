// TODO: Delete test once used for real test.
// This test is meant to be a boiler plate for real testing.
const { connectDatabase, disconnectDatabase } = require("../utils/test-utils/db.util");

const supertest = require('supertest')
const app = require('../app');
const request = supertest(app);

beforeAll(() => {
  connectDatabase();
});

afterAll(() => {
  disconnectDatabase();
});

it('Testing to see if Jest works', function() {
  expect(1).toBe(1);
});