// «The Edge of the Village» outside games: the evening as it opens — the old man by his winch, the man with his net
// on the rise —; the night coming down over the pits, their lanterns; the morning fog off the sea; the fog lifting into
// the white-gold day; the evening again. Nobody moves: only the light, the grass in the wind, the blown sand.
return [
  {
    name: "evening",
    run: async (s) => {
      await s.wait(6);
    },
  },
  {
    name: "night",
    run: async (s) => {
      await s.move("night", 1, { over: 14, ease: "inOut" });
      await s.wait(5);
    },
  },
  {
    name: "fog",
    run: async (s) => {
      await s.all(
        s.move("night", 0, { over: 10, ease: "inOut" }),
        s.move("evening", 0, { over: 10, ease: "inOut" }),
        s.move("fog", 1, { over: 10, ease: "inOut" }),
        s.move("lanterns", 0, { over: 6 }),
      );
      await s.wait(5);
    },
  },
  {
    name: "day",
    run: async (s) => {
      await s.move("fog", 0, { over: 8, ease: "inOut" });
      await s.wait(4);
    },
  },
  {
    name: "evening again",
    run: async (s) => {
      await s.all(s.move("evening", 1, { over: 10, ease: "inOut" }), s.move("lanterns", 1, { over: 4 }));
      await s.wait(3);
    },
  },
];
