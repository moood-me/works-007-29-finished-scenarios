// The showcase: the evenings at the table across the years, piece after piece (lib.film), each moment laid out
// first (the game's part: `moment`), and the table close up where the game opens it — the cracked acorns put aside
// (МИ1) and the last ten counted (the guiding `count`)
const film = scene.lib.film(scene);
const piece = (name, moment, follows) => ({
  name,
  run: async s => {
    if (s.state.moment !== moment) {
      s.set('moment', moment);
      await s.until(() => s.state.staged === moment);
    }
    const b = film[name];
    if (!follows) s.cut(b.from());
    await b.run(s);
  },
});
// the table close: МИ1's cracked acorns put aside one by one, then closed on the sorted heap
const sorting = {
  name: 'sorting',
  run: async s => {
    await s.move('close', 1, { over: 0.6 });
    for (let k = 0; k < 10; k++) {
      await s.wait(0.5);
      s.set('cracked_out', s.state.cracked_out | (1 << k));
    }
    await s.wait(0.8);
    s.set('acorns', 'sorted');
    await s.move('close', 0, { over: 0.6 });
  },
};
// the table close: the last ten counted into the tenth heap
const counting = {
  name: 'counting',
  run: async s => {
    await s.move('close', 1, { over: 0.6 });
    for (let k = 1; k <= 10; k++) {
      await s.wait(0.55);
      s.set('counted', k);
    }
    await s.wait(1);
    await s.move('close', 0, { over: 0.6 });
  },
};
return [
  piece('table', 'arrival'), sorting, piece('hundred', 'arrival', true), piece('silence', 'arrival', true),
  piece('button', 'button'),
  piece('hundred_night', 'night'), counting, piece('go_write', 'night', true),
  piece('hundred_slow', 'evening'), piece('count_slow', 'evening', true), counting, piece('slow_silence', 'evening', true),
];
