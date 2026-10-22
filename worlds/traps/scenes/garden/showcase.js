// The guest under the chestnut: the three standing as the judge has just risen to meet him — Traps smiling past the
// viewer, the judge beaming toward his guest, Zorn behind his chair studying him; then Traps turns to his host, Zorn
// smiles to himself, and Traps turns back.
const AHEAD = [-0.6, 1.0, 1.55];
return [
  {
    name: 'evening',
    run: async s => {
      s.person('traps').look(AHEAD);
      s.person('zorn').mood('thinking');
      await s.wait(8);
    },
  },
  {
    name: 'glances',
    run: async s => {
      s.person('traps').look('judge');
      await s.wait(1.2);
      s.person('zorn').mood('smile');
      await s.wait(4);
      s.person('traps').look(AHEAD);
      await s.wait(1);
      s.person('zorn').mood('thinking');
      await s.wait(4);
    },
  },
];
