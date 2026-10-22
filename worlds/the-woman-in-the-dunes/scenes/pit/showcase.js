// «The Pit» outside games: the evening as it opens — the lanterns lit, the gold going off the top of the far wall —,
// then the night coming down into the pit, the lamp lit in the house as it does; then the night held. Nobody moves:
// only the light, the sand running off the eave and blowing off the lip.
return [
  {
    name: "evening",
    run: async (s) => {
      await s.wait(6);
    },
  },
  {
    name: "nightfall",
    run: async (s) => {
      const night = s.move("night", 1, { over: 16, ease: "inOut" });
      await s.wait(7);
      await s.move("lamp_in", 1, { over: 3 });
      await night;
    },
  },
  {
    name: "night",
    run: async (s) => {
      await s.wait(8);
    },
  },
];
