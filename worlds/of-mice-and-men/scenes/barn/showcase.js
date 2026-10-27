// The barn on Sunday afternoon: Lennie in the hay with the pup, Curley's wife come round the end of the last stall.
// He looks up at her and down again; she looks off to the doors — the horseshoes out in the yard — and back at him;
// the sun gets lower, its lines climbing off the floor up the stalls.
return [
  { name: 'afternoon', run: async s => { await s.wait(7); } },
  {
    name: 'she is there',
    run: async s => {
      s.person('lennie').look('wife');
      await s.wait(2.5);
      s.person('wife').look([0.4, 9.0, 1.4]);
      await s.wait(1.2);
      s.person('lennie').look('lennie#puppy');
      await s.wait(4);
      s.person('wife').look('lennie');
      await s.wait(3);
    },
  },
  { name: 'the sun lower', run: async s => { await s.move('sun_height', 13, { over: 14 }); await s.wait(2); } },
  { name: 'back', run: async s => { await s.move('sun_height', 22, { over: 3 }); await s.wait(1); } },
];
