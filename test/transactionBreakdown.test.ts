import { connectDatabase, disconnectDatabase } from '../utils/test-utils/db.util';
import supertest from 'supertest';
import testApp from '../app';
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
      const res = await request.post('/api/transactionBreakdown').send(transactionBreakdownSeed[0]);
      const { orderTransaction } = res.body;
      expect(res.status).toBe(200);
      expect(orderTransaction.people.length).toBe(4);
      expect(orderTransaction.amountDetail.amount).toBe(17.4);
      expect(orderTransaction.amountDetail.subAmount).toBe(13.0);
    });

    it('should return a transactionBreakdown with accurate orderTransactionPersons', async () => {
      const res = await request.post('/api/transactionBreakdown').send(transactionBreakdownSeed[0]);
      const { orderTransactionPersons } = res.body;

      expect(res.status).toBe(200);
      expect(orderTransactionPersons.length).toBe(4);
      expect(orderTransactionPersons[0].amountDetail.amount).toBe(6.7);
      expect(orderTransactionPersons[0].amountDetail.subAmount).toBe(5.0);
      expect(orderTransactionPersons[0].amountDetail.tax).toBe(0.45);
      expect(orderTransactionPersons[0].amountDetail.tip).toBe(1.25);
    });

    it('should return a transactionBreakdown even with 0 values', async () => {
      const res = await request.post('/api/transactionBreakdown').send(transactionBreakdownSeed[1]);
      const { orderTransaction, orderTransactionPersons } = res.body;

      expect(res.status).toBe(200);
      expect(orderTransaction.amountDetail.amount).toBe(14.15);
      expect(orderTransactionPersons[0].amountDetail.amount).toBe(5.45);
      expect(orderTransactionPersons[0].amountDetail.subAmount).toBe(5.0);
      expect(orderTransactionPersons[0].amountDetail.tax).toBe(0.45);
      expect(orderTransactionPersons[0].amountDetail.tip).toBe(0);
    });

    it('should throw an error if tax and tip are omitted', async () => {
      const res = await request.post('/api/transactionBreakdown').send(transactionBreakdownSeed[2]);
      expect(res.status).toBe(400);
      expect(res.text).toBe('Missing content in payload');
    });
  });
});
