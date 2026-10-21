return [
  // the June afternoon: the two stand by the water, three steps apart; he looks at her, she at the walk
  { name: 'afternoon', run: async s => {
    s.set('evening', 0);
    s.set('sun_bearing', 215);
    s.set('sun_height', 30);
    await s.wait(10);
  } },
  // the light goes over toward an early evening — warmer, the sun lower, the shadows longer; still bright
  { name: 'early evening', run: async s => {
    await s.all(s.move('evening', 1, { over: 16 }), s.move('sun_bearing', 238, { over: 16 }), s.move('sun_height', 20, { over: 16 }));
    await s.wait(6);
  } },
];
