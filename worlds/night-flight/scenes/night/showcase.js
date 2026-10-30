// The night over the field from the window upstairs, passed along from the prologue's place to chapter IV's and back
// to the first — the lightning in the south, the lamps of the lines coming in, the clouds drifting.
return [
  { name: 'dusk', run: async s => { s.set('shown', 0); await s.wait(8); } },
  { name: 'the Andes', run: async s => { s.set('shown', 1); await s.wait(6); } },
  { name: 'the storm', run: async s => { s.set('shown', 2); await s.wait(6); } },
  { name: 'the stars', run: async s => { s.set('shown', 3); await s.wait(6); } },
  { name: 'the European mail', run: async s => { s.set('shown', 4); await s.wait(8); } },
  { name: 'back', run: async s => { s.set('shown', 0); await s.wait(4); } },
];
