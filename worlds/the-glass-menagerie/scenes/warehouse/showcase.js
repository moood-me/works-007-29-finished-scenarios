// An afternoon in the warehouse, a week after the flat: Tom on his crate writes on a shoebox lid; Jim, sleeves
// rolled, a foot up on a carton, grins at him. Tom looks up and out of the window, at the harbour; a cloud goes over
// the sun and the beam fades and comes back; Tom bends to his lid again.
return [
  {
    name: 'the storeroom',
    run: async s => {
      s.set('cloud', 0);
      s.person('tom').look('tom#lid');
      s.person('jim').look('tom');
      await s.wait(8);
    },
  },
  {
    name: 'the window',
    run: async s => {
      s.person('tom').look('harbour#ship');
      await s.wait(1.5);
      s.person('jim').look('window');
      await s.wait(6);
    },
  },
  {
    name: 'a cloud',
    run: async s => {
      await s.move('cloud', 1, { over: 3 });
      await s.wait(2.5);
      await s.move('cloud', 0, { over: 4 });
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('jim').look('tom');
      await s.wait(1);
      s.person('tom').look('tom#lid');
      await s.wait(6);
    },
  },
];
