return [
  // the second dance: Jane and Bingley face each other in the set, Darcy stands apart and watches them; Elizabeth, three
  // steps from him, has just heard what he said of her — a moment, and the corner of her mouth lifts
  {
    name: "tolerable",
    run: async (s) => {
      s.set("later", 0);
      s.set("elizabeth_mood", "neutral");
      await s.wait(3);
      s.set("elizabeth_mood", "smile");
      await s.wait(8);
    },
  },
  // the evening goes on: the windows go a deep blue, the room is warm with its candles alone; the faces still lit
  {
    name: "candlelight",
    run: async (s) => {
      await s.move("later", 1, { over: 16 });
      await s.wait(6);
    },
  },
];
