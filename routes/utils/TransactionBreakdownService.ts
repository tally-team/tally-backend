const getOrderItemsTotal = (item: any, currTotal: number) => {
  return Math.round((item.cost / item.people.length) * 100) / 100 + currTotal;
};

const getSubAmountPerson = (orderItems: Array<any>, name: string = '') => {
  return orderItems.reduce(
    (currTotal, currItem) =>
      name && currItem.people.includes(name) ? getOrderItemsTotal(currItem, currTotal) : currTotal,
    0
  );
};

const getSubAmountTransaction = (orderItems: Array<any>) => {
  return orderItems.reduce((currTotal, currItem) => currTotal + currItem.cost, 0);
};

const createOrderTransaction = (
  items: Array<any>,
  tax: number,
  tip: number,
  party: Array<string>
) => {
  const subAmount = getSubAmountTransaction(items);

  return {
    id: 1,
    items: items,
    people: party,
    amountDetail: {
      id: 1,
      transactionId: 1,
      amount: subAmount + tax + tip,
      subAmount: subAmount,
      tax: tax,
      tip: tip,
    },
  };
};

const getPersonItemList = (name: string, orderList: Array<any>, orderTransaction: any) => {
  const subAmount = getSubAmountPerson(orderList, name);
  const costRatio = subAmount / orderTransaction.amountDetail.subAmount;
  const tax = Math.ceil(orderTransaction.amountDetail.tax * costRatio * 100) / 100;
  const tip = Math.ceil(orderTransaction.amountDetail.tip * costRatio * 100) / 100;

  const totalAmount = subAmount + tax + tip;
  return {
    amount: totalAmount,
    subAmount: subAmount,
    tax: tax,
    tip: tip,
  };
};

const personItemList = (name: string, orderList: Array<any>) => {
  return orderList.filter((item) => item.people.includes(name));
};

const createTransactionPersons = (
  party: Array<string>,
  orderItems: Array<any>,
  orderTransaction: any
) => {
  return party.map((indPerson: string, index: number) => {
    return {
      id: index + 1,
      person: indPerson,
      transaction: 1,
      amountDetail: {
        transactionPersonId: index + 1,
        ...getPersonItemList(indPerson, orderItems, orderTransaction),
      },
      items: personItemList(indPerson, orderItems),
      status: 1,
    };
  });
};

export const getTransactionBreakdown = (
  items: Array<any>,
  tax: number,
  tip: number,
  party: Array<string>
) => {
  const orderTransaction = createOrderTransaction(items, tax, tip, party);
  const orderTransactionPersons = createTransactionPersons(party, items, orderTransaction);
  return { orderTransaction, orderTransactionPersons };
};
