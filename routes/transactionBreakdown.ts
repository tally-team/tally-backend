import { Request, Response } from 'express';
import express from 'express';
const router = express.Router();

const createItemList = (items: Array<any>) => {
  return items.map((individual: any, ind: number) => {
    const indItem = {
      id: ind,
      name: individual.name,
      people: individual.people,
      cost: individual.cost,
    };
    return indItem;
  });
};

const getSubAmount = (orderItems: Array<any>, name: string = '') => {
  let total = 0;
  for (const item of orderItems) {
    if (name) {
      if (item.people.includes(name)) {
        total += Math.round((item.cost / item.people.length) * 100) / 100;
      }
    } else {
      total += item.cost;
    }
  }
  return total;
};

const createOrderTransaction = (
  items: Array<any>,
  tax: number,
  tip: number,
  party: Array<string>
) => {
  const subAmount = getSubAmount(items);

  return {
    id: 1,
    items: items,
    people: party,
    amountDetail: {
      id: 1,
      transactionId: 3,
      amount: subAmount + tax + tip,
      subAmount: subAmount,
      tax: tax,
      tip: tip,
    },
  };
};

const getPersonCost = (name: string, orderList: Array<any>, orderTransaction: any) => {
  const subAmount = getSubAmount(orderList, name),
    costRatio = subAmount / orderTransaction.amountDetail.subAmount,
    tax = Math.ceil(orderTransaction.amountDetail.tax * costRatio * 100) / 100,
    tip = Math.ceil(orderTransaction.amountDetail.tip * costRatio * 100) / 100;

  const totalAmount = subAmount + tax + tip;
  return {
    amount: totalAmount,
    subAmount: subAmount,
    tip: tip,
    tax: tax,
  };
};

const personItemList = (name: string, orderList: Array<any>) => {
  return orderList.filter((item) => {
    return item.people.includes(name);
  });
};

const createTransactionPersons = (
  party: Array<string>,
  orderItems: Array<any>,
  orderTransaction: any
) => {
  return party.map((indPerson: string, index: number) => {
    const personCost = getPersonCost(indPerson, orderItems, orderTransaction);
    return {
      id: index,
      person: indPerson,
      transaction: 1,
      amountDetail: {
        id: index,
        transactionPersonId: index,
        ...personCost,
      },
      items: personItemList(indPerson, orderItems),
      status: 1,
    };
  });
};

router.post('/transactionBreakdown', (req: Request, res: Response) => {
  const { items, tax, tip, party } = req.body;
  if (items == null || tax == null || tip == null || party == null) {
    return res.status(400).send('Missing content in payload');
  }
  const orderItems = createItemList(items);
  const orderTransaction = createOrderTransaction(orderItems, tax, tip, party);
  const orderTransactionPersons = createTransactionPersons(party, orderItems, orderTransaction);

  res.send({ orderTransaction, orderTransactionPersons });
  return;
});

export const transactionBreakdown = router;
