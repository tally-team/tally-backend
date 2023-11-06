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
    it('should return a transactionBreakdown with accurate orderTransaction', async () => {
      const res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownNormal);
      const { orderTransaction } = res.body;

      expect(res.status).toBe(200);
      expect(
        _.isEqual(
          orderTransaction,
          transactionBreakdownSeed.transactionNormalComparison.orderTransaction
        )
      ).toBe(true);
    });

    it('should return a transactionBreakdown with accurate orderTransactionPersons', async () => {
      const res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownNormal);
      const { orderTransactionPersons } = res.body;
      console.log(
        orderTransactionPersons,
        transactionBreakdownSeed.transactionNormalComparison.orderTransactionPersons
      );
      expect(res.status).toBe(200);
      expect(
        _.isEqual(
          orderTransactionPersons,
          transactionBreakdownSeed.transactionNormalComparison.orderTransactionPersons
        )
      ).toBe(true);
    });

    it('should return a transactionBreakdown even with 0 values', async () => {
      const res = await request
        .post('/api/transactionBreakdown')
        .send(transactionBreakdownSeed.transactionBreakdownZeroTip);
      const { orderTransaction, orderTransactionPersons } = res.body;

      expect(res.status).toBe(200);
      expect(orderTransaction.amountDetail.amount).toBe(14.15);
      expect(orderTransactionPersons[0].amountDetail.amount).toBe(5.45);
      expect(orderTransactionPersons[0].amountDetail.subAmount).toBe(5.0);
      expect(orderTransactionPersons[0].amountDetail.tax).toBe(0.45);
      expect(orderTransactionPersons[0].amountDetail.tip).toBe(0);
    });

    it('should throw an error if tax and tip are omitted', async () => {
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
