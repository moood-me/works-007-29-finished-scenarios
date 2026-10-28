// An afternoon in the shed: Parish at the door, Niggle on the platform, brush in hand, looking aside — anywhere but
// at him; then Niggle's eyes go back to his leaf while Parish looks down at the thistles by the door — never at the
// canvas; the light goes toward sunset and the lantern carries the shed; back to the afternoon.
return [
  {
    name: 'afternoon',
    run: async s => {
      s.set('dusk', 0);
      s.set('lamp', 1);
      s.person('niggle').look([1.3, 3.0, 2.0]);
      s.person('parish').look('niggle');
      await s.wait(8);
    },
  },
  {
    name: 'the leaf',
    run: async s => {
      s.person('niggle').look('canvas#leaf');
      await s.wait(1.2);
      s.person('parish').look([2.95, 6.4, 0.5]);
      await s.wait(7);
    },
  },
  {
    name: 'sunset',
    run: async s => {
      await s.move('dusk', 1, { over: 8 });
      await s.wait(4);
    },
  },
  {
    name: 'back',
    run: async s => {
      s.person('niggle').look([1.3, 3.0, 2.0]);
      s.person('parish').look('niggle');
      await s.move('dusk', 0, { over: 4 });
      await s.wait(3);
    },
  },
];
