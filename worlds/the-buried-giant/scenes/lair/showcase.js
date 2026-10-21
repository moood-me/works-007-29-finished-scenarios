// The lair as its page shows it: the four stand on the path at dawn while she breathes below; her eye opens a little
// and shuts again; the mist thickens till the far slopes are gone, then thins till the mountain shows, and settles back
return [
  { name: 'dawn', run: async s => { await s.wait(6); } },
  { name: 'her eye', run: async s => { await s.move('querig_eye', 0.7, { over: 4 }); await s.wait(3); await s.move('querig_eye', 0, { over: 3 }); } },
  { name: 'thicker', run: async s => { await s.move('thick', 1, { over: 8 }); await s.wait(2); } },
  { name: 'clearing', run: async s => { await s.all(s.move('thick', 0, { over: 8 }), s.move('clear', 1, { over: 10 })); await s.wait(3); } },
  { name: 'settling', run: async s => { await s.move('clear', 0, { over: 8 }); } },
];
