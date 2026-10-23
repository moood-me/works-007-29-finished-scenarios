// The pool at sundown: the two of them by the fire as the sun goes down behind the viewer and the dusk comes in, and
// back to the gold of the evening
return [
  { name: 'sundown', run: async s => { await s.wait(10); } },
  { name: 'dusk', run: async s => { await s.move('dusk', 1, { over: 18 }); await s.wait(6); } },
  { name: 'evening again', run: async s => { await s.move('dusk', 0, { over: 6 }); } },
];
