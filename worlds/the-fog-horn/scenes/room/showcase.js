// The evening in the room: the sun going into the sea in the window, the great lamp overhead lit (its light down the
// hatch), the night coming into the window — and Nora's light far off across the water, one long; Johnny looks.
return [
  {
    name: 'sunset',
    run: async s => {
      s.set('night', 0);
      s.set('beacon', 0);
      s.set('nora', 0);
      s.set('lamp', 1);
      s.set('stove', 1);
      s.set('johnny_look', [0.4, 3.0, 0.2]);
      await s.wait(7);
    },
  },
  { name: 'the lamp above', run: async s => { await s.move('beacon', 1, { over: 2 }); await s.wait(3); } },
  { name: 'night', run: async s => { await s.move('night', 1, { over: 12 }); await s.wait(2); } },
  {
    name: 'her window',
    run: async s => {
      s.person('johnny').look('far_shore#window');
      await s.wait(1.5);
      await s.move('nora', 1, { over: 0.4 });
      await s.wait(3);
      await s.move('nora', 0, { over: 0.4 });
      await s.wait(1.5);
      await s.move('nora', 1, { over: 0.4 });
      await s.wait(5);
    },
  },
];
