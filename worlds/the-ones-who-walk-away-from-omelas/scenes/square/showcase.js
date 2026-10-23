// The square on the festival morning, then the evening coming over the bay and the garland lanterns lighting, and
// back to the morning: the people stand as they are — Ila playing on the fountain's rim, Mev's hand on her hair, Kor
// laughing beside them
return [
  { name: 'morning', run: async s => { await s.wait(12); } },
  { name: 'evening', run: async s => { await s.move('evening', 1, { over: 14 }); await s.wait(8); } },
  { name: 'morning again', run: async s => { await s.move('evening', 0, { over: 6 }); } },
];
