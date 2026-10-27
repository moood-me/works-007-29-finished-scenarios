// An afternoon in the warehouse, a week after the flat: Tom on his crate, a shoebox lid on his knees, looks up out
// at us (the narrator) while Jim — sleeves rolled, a foot up on a carton — grins at him; he bends to his lid; then
// looks out of the window, at the harbour; a cloud goes over the sun and the beam fades and comes back; he looks at us.
return [
  {
    name: 'the storeroom',
    run: async s => {
      s.set('cloud', 0);
      s.person('tom').look([0, 0, 1.7]);
      s.person('jim').look('tom');
      await s.wait(5);
      s.person('tom').look('tom#lid');
      await s.wait(5);
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
      s.person('tom').look([0, 0, 1.7]);
      await s.wait(6);
    },
  },
];
