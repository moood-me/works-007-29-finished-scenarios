// The cairn as its page shows it: the people stand; the mist thickens over the pass till the far side is gone, then
// thins till the mountain shows, and settles back
return [
  { name: 'mist', run: async s => { await s.wait(4); } },
  { name: 'thicker', run: async s => { await s.move('thick', 1, { over: 8 }); await s.wait(2); } },
  { name: 'clearing', run: async s => { await s.all(s.move('thick', 0, { over: 8 }), s.move('clear', 1, { over: 10 })); await s.wait(3); } },
  { name: 'settling', run: async s => { await s.move('clear', 0, { over: 8 }); } },
];
