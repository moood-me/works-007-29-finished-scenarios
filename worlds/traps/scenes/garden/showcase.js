// The guest under the chestnut: the three standing as the judge has just risen to meet him — Traps and the judge
// beaming at each other, Zorn behind his chair studying the guest; then Traps glances at Zorn, who smiles, and turns
// back to his host.
return [
  {
    name: 'evening',
    run: async s => {
      s.person('traps').look('judge');
      s.person('zorn').mood('thinking');
      await s.wait(8);
    },
  },
  {
    name: 'glances',
    run: async s => {
      s.person('traps').look('zorn');
      await s.wait(1.2);
      s.person('zorn').mood('smile');
      await s.wait(4);
      s.person('traps').look('judge');
      await s.wait(1);
      s.person('zorn').mood('thinking');
      await s.wait(4);
    },
  },
];
