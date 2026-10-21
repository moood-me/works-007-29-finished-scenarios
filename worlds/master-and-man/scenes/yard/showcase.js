// The yard's own little film, outside games: they stand as they stand in the story — the snow and the ground wind
// going, the horse breathing; the master, looking down over his yard, glances back at his wife in the door, then at
// Nikita, and looks out over the yard again; the snow thickens and eases.
return [
  { name: "yard", run: async (s) => { await s.wait(8); } },
  {
    name: "glance",
    run: async (s) => {
      s.person("vasily").look("praskovya");
      await s.wait(3);
      s.person("vasily").look("nikita");
      await s.wait(4);
      s.person("vasily").look([0.5, 3.5, 0]);
      await s.wait(2);
    },
  },
  {
    name: "snow",
    run: async (s) => {
      await s.move("snow", 1, { over: 6 });
      await s.wait(4);
      await s.move("snow", 0.55, { over: 6 });
    },
  },
];
