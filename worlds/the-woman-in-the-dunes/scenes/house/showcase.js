// «The House» outside games: the evening as it opens — the lamp lit, the two of them by the hearth —; the lamp put out
// (the room in the moon's blue, still clear); the day coming in at the door; then the evening again and the lamp lit.
// Nobody moves: only the light, the sand running from the roof, the kettle's steam, the hearth.
return [
  {
    name: "lamplight",
    run: async (s) => {
      await s.wait(6);
    },
  },
  {
    name: "lamp out",
    run: async (s) => {
      await s.move("lamp", 0, { over: 3 });
      await s.wait(4);
    },
  },
  {
    name: "day",
    run: async (s) => {
      await s.move("night", 0, { over: 10, ease: "inOut" });
      await s.wait(5);
    },
  },
  {
    name: "evening",
    run: async (s) => {
      await s.move("night", 1, { over: 10, ease: "inOut" });
      await s.move("lamp", 1, { over: 3 });
      await s.wait(4);
    },
  },
];
