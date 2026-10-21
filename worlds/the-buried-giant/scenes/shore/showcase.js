// The shore as its page shows it: the three stand by the boat in the evening; the light goes, the lantern and the
// candle are what is left; then the evening comes back
return [
  { name: 'evening', run: async s => { await s.wait(5); } },
  { name: 'dusk', run: async s => { await s.move('night', 0.5, { over: 8 }); await s.wait(2); } },
  { name: 'night', run: async s => { await s.all(s.move('night', 1, { over: 6 }), s.move('lantern', 1, { over: 4 })); await s.wait(5); } },
  { name: 'evening again', run: async s => { await s.all(s.move('night', 0, { over: 8 }), s.move('lantern', 0.35, { over: 8 })); } },
];
