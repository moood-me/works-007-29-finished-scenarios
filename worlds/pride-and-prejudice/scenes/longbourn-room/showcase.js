return [
  // an early autumn evening: the window still light; Jane at her frame, Elizabeth laughing with her, Lydia at the window
  { name: 'early evening', run: async s => {
    s.set('dusk', 0);
    await s.wait(10);
  } },
  // the evening comes on: the window dims, the candles and the fire warm the room; still bright, the faces lit
  { name: 'candlelight', run: async s => {
    await s.move('dusk', 1, { over: 16 });
    await s.wait(6);
  } },
];
