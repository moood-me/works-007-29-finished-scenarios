// A quarter to two in the bureau: she stands by the door, the three men turned to her; the inker running, the
// lightning far off in the window. Then the inker stops — the tape still — and starts again.
return [
  { name: 'the bureau', run: async s => { s.set('lamps', 1); s.set('office', 1); s.set('tape', 1); await s.wait(9); } },
  { name: 'silence', run: async s => { s.set('tape', 0); await s.wait(4); } },
  { name: 'the tape', run: async s => { s.set('tape', 1); await s.wait(6); } },
];
