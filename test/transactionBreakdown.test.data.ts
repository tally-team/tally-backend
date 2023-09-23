const payloadSeed = [
  {
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
  {
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
  {
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
  },
];

export default payloadSeed;
