// The field at half past ten: the three standing as they stand (Rivière looking at the old man's hands), the silent
// lightning far to the south; then the field's lights put out and the switch thrown again — the floodlights coming
// back over the grass.
return [
  { name: 'the field', run: async s => { s.set('floods', 1); s.set('hangar', 1); s.set('office', 1); await s.wait(9); } },
  { name: 'dark', run: async s => { await s.move('floods', 0, { over: 0.3 }); await s.wait(3); } },
  { name: 'the switch', run: async s => { await s.move('floods', 1, { over: 1.6, ease: 'in' }); await s.wait(7); } },
];
