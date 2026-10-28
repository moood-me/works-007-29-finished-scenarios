// The oil lamp's round frosted globe over its brass column (table_things) — grey-white when out, warm gold with the flame's glow when lit (the layers cross-faded by `lamp` in its animate); its light
// `flame` is the scene's light "lamp".
const globe = c => {
  c.beginPath();
  c.arc(0, -0.43, 0.12, 0, Math.PI * 2);
  c.fill();
  c.fillRect(-0.022, -0.62, 0.044, 0.1);
};
e.layer('dark', {}, c => {
  c.fillStyle = '#d9d6cf';
  globe(c);
});
e.layer('lit', {}, c => {
  c.fillStyle = '#ffe3ae';
  globe(c);
  c.fillStyle = '#fff4d8';
  c.beginPath();
  c.ellipse(0, -0.43, 0.05, 0.07, 0, 0, Math.PI * 2);
  c.fill();
});
e.light(0, -0.43, 0.14, '#ffd890', 1, 'flame');
e.at(0, -0.43);
