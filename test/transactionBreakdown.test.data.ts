const payloadSeed = {
  transactionBreakdownNormal: {
    items: [
      {
        name: 'chicken soup',
        cost: 4.0,
        people: ['Michelle', 'Cindy'],
      },
      {
        name: 'sushi',
        cost: 9.0,
        people: ['Michelle', 'Joanne', 'Ellie'],
      },
    ],
    tax: 1.15,
    tip: 3.25,
    party: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
  },
  transactionNormalComparison: {
    orderTransaction: {
      id: 1,
      items: [
        { name: 'chicken soup', cost: 4.0, people: ['Michelle', 'Cindy'] },
        { name: 'sushi', cost: 9.0, people: ['Michelle', 'Joanne', 'Ellie'] },
      ],
      people: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
      amountDetail: {
        id: 1,
        transactionId: 1,
        amount: 17.4,
        subAmount: 13.0,
        tax: 1.15,
        tip: 3.25,
      },
    },
    orderTransactionPersons: [
      {
        id: 1,
        person: 'Michelle',
        transaction: 1,
        amountDetail: { transactionPersonId: 1, amount: 6.7, subAmount: 5.0, tax: 0.45, tip: 1.25 },
        items: [
          { name: 'chicken soup', cost: 4.0, people: ['Michelle', 'Cindy'] },
          { name: 'sushi', cost: 9.0, people: ['Michelle', 'Joanne', 'Ellie'] },
        ],
        status: 1,
      },
      {
        id: 2,
        person: 'Cindy',
        transaction: 1,
        amountDetail: { transactionPersonId: 2, amount: 2.68, subAmount: 2.0, tax: 0.18, tip: 0.5 },
        items: [{ name: 'chicken soup', cost: 4.0, people: ['Michelle', 'Cindy'] }],
        status: 1,
      },
      {
        id: 3,
        person: 'Joanne',
        transaction: 1,
        amountDetail: {
          transactionPersonId: 3,
          amount: 4.02,
          subAmount: 3.0,
          tax: 0.27,
          tip: 0.75,
        },
        items: [{ name: 'sushi', cost: 9.0, people: ['Michelle', 'Joanne', 'Ellie'] }],
        status: 1,
      },
      {
        id: 4,
        person: 'Ellie',
        transaction: 1,
        amountDetail: {
          transactionPersonId: 4,
          amount: 4.02,
          subAmount: 3.0,
          tax: 0.27,
          tip: 0.75,
        },
        items: [{ name: 'sushi', cost: 9.0, people: ['Michelle', 'Joanne', 'Ellie'] }],
        status: 1,
      },
    ],
  },
  transactionBreakdownZeroTip: {
    items: [
      {
        name: 'chicken soup',
        cost: 4.0,
        people: ['Michelle', 'Cindy'],
      },
      {
        name: 'sushi',
        cost: 9.0,
        people: ['Michelle', 'Joanne', 'Ellie'],
      },
    ],
    tax: 1.15,
    tip: 0,
    party: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
  },
  transactionZeroTipComparison: {
    orderTransaction: {
      id: 1,
      items: [
        { name: 'chicken soup', cost: 4.0, people: ['Michelle', 'Cindy'] },
        { name: 'sushi', cost: 9.0, people: ['Michelle', 'Joanne', 'Ellie'] },
      ],
      people: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
      amountDetail: {
        id: 1,
        transactionId: 1,
        amount: 14.15,
        subAmount: 13.0,
        tax: 1.15,
        tip: 0,
      },
    },
    orderTransactionPersons: [
      {
        id: 1,
        person: 'Michelle',
        transaction: 1,
        amountDetail: { transactionPersonId: 1, amount: 5.45, subAmount: 5.0, tax: 0.45, tip: 0 },
        items: [
          { name: 'chicken soup', cost: 4.0, people: ['Michelle', 'Cindy'] },
          { name: 'sushi', cost: 9.0, people: ['Michelle', 'Joanne', 'Ellie'] },
        ],
        status: 1,
      },
      {
        id: 2,
        person: 'Cindy',
        transaction: 1,
        amountDetail: { transactionPersonId: 2, amount: 2.18, subAmount: 2.0, tax: 0.18, tip: 0 },
        items: [{ name: 'chicken soup', cost: 4.0, people: ['Michelle', 'Cindy'] }],
        status: 1,
      },
      {
        id: 3,
        person: 'Joanne',
        transaction: 1,
        amountDetail: {
          transactionPersonId: 3,
          amount: 3.27,
          subAmount: 3.0,
          tax: 0.27,
          tip: 0,
        },
        items: [{ name: 'sushi', cost: 9.0, people: ['Michelle', 'Joanne', 'Ellie'] }],
        status: 1,
      },
      {
        id: 4,
        person: 'Ellie',
        transaction: 1,
        amountDetail: {
          transactionPersonId: 4,
          amount: 3.27,
          subAmount: 3.0,
          tax: 0.27,
          tip: 0,
        },
        items: [{ name: 'sushi', cost: 9.0, people: ['Michelle', 'Joanne', 'Ellie'] }],
        status: 1,
      },
    ],
  },
  transactionBreakdownZeroTax: {
    items: [
      {
        name: 'chicken soup',
        cost: 4.0,
        people: ['Michelle', 'Cindy'],
      },
      {
        name: 'sushi',
        cost: 9.0,
        people: ['Michelle', 'Joanne', 'Ellie'],
      },
    ],
    tax: 0,
    tip: 3.25,
    party: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
  },
  transactionZeroTaxComparison: {
    orderTransaction: {
      id: 1,
      items: [
        { name: 'chicken soup', cost: 4.0, people: ['Michelle', 'Cindy'] },
        { name: 'sushi', cost: 9.0, people: ['Michelle', 'Joanne', 'Ellie'] },
      ],
      people: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
      amountDetail: {
        id: 1,
        transactionId: 1,
        amount: 16.25,
        subAmount: 13.0,
        tax: 0,
        tip: 3.25,
      },
    },
    orderTransactionPersons: [
      {
        id: 1,
        person: 'Michelle',
        transaction: 1,
        amountDetail: { transactionPersonId: 1, amount: 6.25, subAmount: 5.0, tax: 0, tip: 1.25 },
        items: [
          { name: 'chicken soup', cost: 4.0, people: ['Michelle', 'Cindy'] },
          { name: 'sushi', cost: 9.0, people: ['Michelle', 'Joanne', 'Ellie'] },
        ],
        status: 1,
      },
      {
        id: 2,
        person: 'Cindy',
        transaction: 1,
        amountDetail: { transactionPersonId: 2, amount: 2.5, subAmount: 2.0, tax: 0, tip: 0.5 },
        items: [{ name: 'chicken soup', cost: 4.0, people: ['Michelle', 'Cindy'] }],
        status: 1,
      },
      {
        id: 3,
        person: 'Joanne',
        transaction: 1,
        amountDetail: {
          transactionPersonId: 3,
          amount: 3.75,
          subAmount: 3.0,
          tax: 0,
          tip: 0.75,
        },
        items: [{ name: 'sushi', cost: 9.0, people: ['Michelle', 'Joanne', 'Ellie'] }],
        status: 1,
      },
      {
        id: 4,
        person: 'Ellie',
        transaction: 1,
        amountDetail: {
          transactionPersonId: 4,
          amount: 3.75,
          subAmount: 3.0,
          tax: 0,
          tip: 0.75,
        },
        items: [{ name: 'sushi', cost: 9.0, people: ['Michelle', 'Joanne', 'Ellie'] }],
        status: 1,
      },
    ],
  },
  transactionBreakdownMissingTax: {
    items: [
      {
        name: 'chicken soup',
        cost: 4.0,
        people: ['Michelle', 'Cindy'],
      },
      {
        name: 'sushi',
        cost: 9.0,
        people: ['Michelle', 'Joanne', 'Ellie'],
      },
    ],
    party: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
    tip: 3.25,
  },
  transactionBreakdownMissingTip: {
    items: [
      {
        name: 'chicken soup',
        cost: 4.0,
        people: ['Michelle', 'Cindy'],
      },
      {
        name: 'sushi',
        cost: 9.0,
        people: ['Michelle', 'Joanne', 'Ellie'],
      },
    ],
    tax: 1.15,
    party: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
  },
  transactionBreakdownMissingParty: {
    items: [
      {
        name: 'chicken soup',
        cost: 4.0,
        people: ['Michelle', 'Cindy'],
      },
      {
        name: 'sushi',
        cost: 9.0,
        people: ['Michelle', 'Joanne', 'Ellie'],
      },
    ],
    tax: 1.15,
    tip: 3.25,
  },
  transactionBreakdownMissingItems: {
    tax: 1.15,
    tip: 3.25,
    party: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
  },
  transactionBreakdownNegativeTip: {
    items: [
      {
        name: 'chicken soup',
        cost: 4.0,
        people: ['Michelle', 'Cindy'],
      },
      {
        name: 'sushi',
        cost: 9.0,
        people: ['Michelle', 'Joanne', 'Ellie'],
      },
    ],
    tax: 1.15,
    tip: -3.25,
    party: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
  },
  transactionBreakdownNegativeTax: {
    items: [
      {
        name: 'chicken soup',
        cost: 4.0,
        people: ['Michelle', 'Cindy'],
      },
      {
        name: 'sushi',
        cost: 9.0,
        people: ['Michelle', 'Joanne', 'Ellie'],
      },
    ],
    tax: -1.15,
    tip: 3.25,
    party: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
  },
  transactionBreakdownNegativeItemCost: {
    items: [
      {
        name: 'chicken soup',
        cost: -4.0,
        people: ['Michelle', 'Cindy'],
      },
      {
        name: 'sushi',
        cost: 9.0,
        people: ['Michelle', 'Joanne', 'Ellie'],
      },
    ],
    tax: 1.15,
    tip: 3.25,
    party: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
  },
  transactionBreakdownZeroItemCost: {
    items: [
      {
        name: 'chicken soup',
        cost: 0,
        people: ['Michelle', 'Cindy'],
      },
      {
        name: 'sushi',
        cost: 9.0,
        people: ['Michelle', 'Joanne', 'Ellie'],
      },
    ],
    tax: 1.15,
    tip: 3.25,
    party: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
  },
  transactionBreakdownEmptyItem: {
    items: [],
    tax: 1.15,
    tip: 3.25,
    party: ['Michelle', 'Cindy', 'Joanne', 'Ellie'],
  },
};

export default payloadSeed;
