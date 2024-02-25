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

    it('should return a transactionBreakdown with 0 tip', async () => {
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

    it('should return a transactionBreakdown with 0 tax', async () => {
      const res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownZeroTax);
      const { orderTransaction, orderTransactionPersons } = res.body;

      expect(res.status).toBe(200);
      expect(
        _.isEqual(
          orderTransaction,
          transactionBreakdownSeed.transactionZeroTaxComparison.orderTransaction
        )
      ).toBe(true);
      expect(
        _.isEqual(
          orderTransactionPersons,
          transactionBreakdownSeed.transactionZeroTaxComparison.orderTransactionPersons
        )
      ).toBe(true);
    });

    it('should throw an error if tax is omitted', async () => {
      const res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownMissingTax);

      expect(res.status).toBe(400);
      expect(res.body.message[0].message).toBe('"tax" is required');
    });

    it('should throw an error if tip is omitted', async () => {
      const res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownMissingTip);
      expect(res.status).toBe(400);
      expect(res.body.message[0].message).toBe('"tip" is required');
    });

    it('should throw an error if party is omitted', async () => {
      const res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownMissingParty);
      expect(res.status).toBe(400);
      expect(res.body.message[0].message).toBe('"party" is required');
    });

    it('should throw an error if items is omitted', async () => {
      const res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownMissingItems);
      expect(res.status).toBe(400);
      expect(res.body.message[0].message).toBe('"items" is required');
    });

    it('should throw an error if tax is negative', async () => {
      const res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownNegativeTax);
      expect(res.status).toBe(400);
      expect(res.body.message[0].message).toBe('"tax" must be greater than or equal to 0');
    });

    it('should throw an error if tip is negative', async () => {
      const res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownNegativeTip);
      expect(res.status).toBe(400);
      expect(res.body.message[0].message).toBe('"tip" must be greater than or equal to 0');
    });

    it("should throw an error if item's cost is negative or zero", async () => {
      let res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownNegativeItemCost);
      expect(res.status).toBe(400);
      expect(res.body.message[0].message).toContain('"items[0].cost" must be a positive number');

      res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownZeroItemCost);
      expect(res.status).toBe(400);
      expect(res.body.message[0].message).toContain('"items[0].cost" must be a positive number');
    });

    it('should throw an error if item is empty', async () => {
      const res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownEmptyItem);
      expect(res.status).toBe(400);
      expect(res.body.message[0].message).toBe('"items" must contain at least 1 items');
    });
  });
});
