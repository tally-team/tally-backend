import { connectDatabase, disconnectDatabase } from '../utils/test-utils/db.util';
import supertest from 'supertest';
import testApp from '../app';
import _ from 'lodash';
const request = supertest(testApp);

import transactionBreakdownSeed from './transactionBreakdown.test.data';

describe('transactionBreakdown routes', () => {
  beforeAll(() => {
    connectDatabase();
  });

  afterAll(() => {
    disconnectDatabase();
  });

  describe('POST route', () => {
    it('should return a transactionBreakdown with accurate orderTransaction and orderTransactionPersons', async () => {
      const res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownNormal);
      const { orderTransaction, orderTransactionPersons } = res.body;

      expect(res.status).toBe(200);
      expect(
        _.isEqual(
          orderTransaction,
          transactionBreakdownSeed.transactionNormalComparison.orderTransaction
        )
      ).toBe(true);
      expect(
        _.isEqual(
          orderTransactionPersons,
          transactionBreakdownSeed.transactionNormalComparison.orderTransactionPersons
        )
      ).toBe(true);
    });

    it('should return a transactionBreakdown even with 0 tip', async () => {
      const res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownZeroTip);
      const { orderTransaction, orderTransactionPersons } = res.body;

      expect(res.status).toBe(200);
      expect(
        _.isEqual(
          orderTransaction,
          transactionBreakdownSeed.transactionZeroTipComparison.orderTransaction
        )
      ).toBe(true);
      expect(
        _.isEqual(
          orderTransactionPersons,
          transactionBreakdownSeed.transactionZeroTipComparison.orderTransactionPersons
        )
      ).toBe(true);
    });

    it('should throw an error if any field (tax, tip, party and/or items) are omitted', async () => {
      let res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownMissingTax);
      expect(res.status).toBe(400);
      expect(res.text).toBe('Missing content in payload');

      res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownMissingTip);
      expect(res.status).toBe(400);
      expect(res.text).toBe('Missing content in payload');

      res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownMissingParty);
      expect(res.status).toBe(400);
      expect(res.text).toBe('Missing content in payload');

      res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownMissingItems);
      expect(res.status).toBe(400);
      expect(res.text).toBe('Missing content in payload');
    });
  });
});
