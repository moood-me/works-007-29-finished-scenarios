// A tuft of dry grass: pale straw blades from one root, bending in the wind (a layer about its root); from the third
// chapter (`year` 20), the valley a meadow, a tuft of green summer grass a little taller
const meadow = e.state.year >= 20;
const COLOURS = meadow ? ["#7e8c52", "#a3a96a", "#c2b47a"] : ["#8f7c52", "#c9b27e", "#b39c68"];
e.layer("blades", { pivot: [0, 0], wind: { strength: 0.55, gust: 0.5 } }, (g) => {
  g.lineCap = "round";
  for (let i = 0; i < 16; i++) {
    const a = (i / 15 - 0.5) * 1.5 + (e.rnd() - 0.5) * 0.25, l = (0.32 + e.rnd() * 0.36) * (meadow ? 1.25 : 1), bend = (e.rnd() - 0.35) * 0.18;
    g.strokeStyle = COLOURS[i % 3];
    g.lineWidth = 0.014 + e.rnd() * 0.01;
    g.beginPath();
    g.moveTo((e.rnd() - 0.5) * 0.08, 0);
    g.quadraticCurveTo(Math.sin(a) * l * 0.5, -Math.cos(a) * l * 0.55, Math.sin(a) * l + bend, -Math.cos(a) * l);
    g.stroke();
  }
});
