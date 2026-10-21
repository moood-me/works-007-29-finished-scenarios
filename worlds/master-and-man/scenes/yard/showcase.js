// The yard's own little film, outside games: they stand as they stand in the story — the snow and the ground wind
// going, the smoke from the neighbour's chimney, everyone's breath in the cold, the window's lamp trembling; the
// master, his hands on his hips, looks out over his yard, glances back at his wife in the door,
// then at Nikita, and looks out again; the snow thickens and eases.
return [
  { name: "yard", run: async (s) => { await s.wait(8); } },
  {
    name: "glance",
    run: async (s) => {
      s.person("vasily").look("praskovya");
      await s.wait(3);
      s.person("vasily").look("nikita");
      await s.wait(4);
      s.person("vasily").look([0.2, 1.2, 1.1]);
      await s.wait(2);
    },
  },
  {
    name: "snow",
    run: async (s) => {
      await s.move("snow", 1, { over: 6 });
      await s.wait(4);
      await s.move("snow", 0.7, { over: 6 });
    },
  },
];
